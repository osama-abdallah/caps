'use strict';

const events = require('../events');
const caps = require('../caps');
const driver = require('../module/driver')
const vendor = require('../module/vendor')

describe('CAPS CONSOLE LOG', () => {
    let consoleSpy; 
    let orderCustomer;

    beforeEach(() => {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
        orderCustomer = {
            orderStore : "Carfour",
            orderId : '24093aa5-fc32-41d5-ae6f-41121c82c046',
            orderCustomer : 'Enrique Weber',
            orderAddress : 'Marquardtfort,048 Donato Mall'
        };
    })
    afterEach(()=>{
        consoleSpy.mockRestore();
    });

    it('verifies the "pickup" emit triggers console in CAPS',()=>{
        events.emit('pickup',orderCustomer);
        expect(consoleSpy).toHaveBeenCalledTimes(1);
    })
    it('verifies the "in-transit" emit triggers console in CAPS',()=>{
        events.emit('in-transit',orderCustomer);
        expect(consoleSpy).toHaveBeenCalledTimes(1);
    })
    it('verifies the "delivered" emit triggers console in CAPS',()=>{
        events.emit('delivered',orderCustomer);
        expect(consoleSpy).toHaveBeenCalledTimes(2);
    })
})