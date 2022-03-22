'use strict';

require('dotenv').config();


const io = require('socket.io-client');
const socket = io.connect(`http://localhost:3001/caps`) 

const {faker} = require('@faker-js/faker');

socket.emit('join','Carfour') 

setInterval( createOrder , 10000)

function createOrder(){
    let orderStore='Carfour';
    let orderId = faker.datatype.uuid();
    let orderCustomer = faker.name.findName();
    let orderAddress = `${faker.address.streetAddress(true)} , ${faker.address.city()} , ${faker.address.stateAbbr()}`;
    let customerOrder = {orderStore,orderId,orderCustomer,orderAddress};
    socket.emit('pickup',customerOrder) 
    return customerOrder;
}
 socket.on('delivered',(payload)=>{
     sayThanks(payload); 
 })
 function sayThanks(payload){
     console.log(`VENDOR : Thank You For Delivering ${payload.orderId}`)
  }
module.exports ={createOrder,sayThanks}