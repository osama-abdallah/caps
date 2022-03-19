'use strict';


const events = require('../events') 

const {faker} = require('@faker-js/faker');


function createOrder (){
    let orderStore = "Carfour";
    let orderId = faker.datatype.uuid();
    let orderCustomer = faker.name.findName();
    let orderAddress = `${faker.address.city()},${faker.address.streetAddress()}`;
    let customerOrders = {orderStore,orderId,orderCustomer,orderAddress}
    return customerOrders;
}

let dataForPickUp = createOrder();

function pickUp (customerOrders = dataForPickUp){ 
    events.emit('pickup', customerOrders)
}
setInterval(pickUp,6000) 

events.on('delivered',makeDelivery)

function makeDelivery (payload){
    console.log(`Thank you, ${payload.orderId}`)
}
module.exports={createOrder ,pickUp , makeDelivery}