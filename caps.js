'use strict';


const events =require('./events')

require('./module/vendor')
require('./module/driver') 

events.on('pickup' , (payload)=> dateEvent('pickup',payload) )
events.on('in-transit' ,(payload)=> dateEvent('in-transit',payload) )
events.on('delivered' ,(payload)=> dateEvent('delivered',payload) )

function dateEvent(event,payload){
    const dateee = new Date().toString();
    console.log("EVENT" , {event , dateee , payload});
}

module.exports = {dateEvent}