'use strict';


require('dotenv').config();
const { logEvent } = require('./modules/logEvent');

const PORT =  3001; 
const io = require('socket.io')(PORT); 
io.on('connection', (socket) => {
    console.log('Welcome to the HUB', socket.id); 
})


const caps = io.of('/caps'); 
caps.on('connection', (socket) => {  
    console.log(`Welcome to Caps NameSpace , ${socket.id}`) 
    socket.on('join',(room)=>{
        console.log(`${socket.id} is joining ${room}`)
        socket.join(room);
    })
    socket.on('pickup', (payload) => {
        logEvent('pickup', payload)
        caps.emit('pickup', payload);
    })
    socket.on('in-transit', (payload) => {
        logEvent('in-transit', payload)
        caps.emit('in-transit',payload)
    })
    socket.on('delivered', (payload) => {
        logEvent('delivered',payload)
        caps.emit('delivered',payload)
    })
})