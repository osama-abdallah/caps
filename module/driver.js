'use strict';

const events = require('../events')

events.on('pickup',(payload)=>deliverPhase(payload));

function deliverPhase(payload){
    setTimeout(()=>{makingPickUp(payload);},2000)
   setTimeout(()=>{makingDelivery(payload)},4000)
}
function makingPickUp(payload){
    console.log(`DRIVER : picked up ${payload.orderId}`)
    events.emit('in-transit',payload) 
}
function makingDelivery(payload){
    console.log(`DRIVER: deliverd up ${payload.orderId}`)
    events.emit('delivered',payload) 
}
module.exports = {deliverPhase,makingPickUp,makingDelivery}