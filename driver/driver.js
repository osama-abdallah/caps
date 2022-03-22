'use strict';

require('dotenv').config();


const io = require('socket.io-client');
const socket = io.connect(`http://localhost:3001/caps`) 

socket.on('pickup',(payload)=>{ 
    setTimeout(() => {doPickup(payload);},1500)
    setTimeout(() => {doDelivery(payload)},3000)
})
function doPickup(payload){
    console.log(`picking Up ${payload.orderId}`)
    socket.emit('in-transit',payload); 
}
function doDelivery(payload){
    console.log(`Delivering up ${payload.orderId}`)
    socket.emit('delivered',payload) 
}
module.exports = { doPickup, doDelivery};