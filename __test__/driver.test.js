'use strict';

const events = require('../events')
const driver = require('../module/driver')

describe('CAPS CONSOLE LOG', () => {
    let consoleSpy;
    let orderCustomer;

    beforeEach(() => {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
        orderCustomer = {
            orderStore : "Carfour",
            orderId : 'fb4eb794-cba0-47de-8558-09875cf99455',
            orderCustomer : 'Enrique Weber',
            orderAddress : 'Marquardtfort,048 Donato Mall'
        };
    })
    afterEach(()=>{
        consoleSpy.mockRestore();
    });
it('verify that makingPickUp() logs a pickup',()=>{
    driver.makingPickUp(orderCustomer);
    expect(consoleSpy).toHaveBeenCalledWith('DRIVER : picked up fb4eb794-cba0-47de-8558-09875cf99455')
})
it('verify that makingDelivery() logs a pickup',()=>{
    driver.makingDelivery(orderCustomer);
    expect(consoleSpy).toHaveBeenCalledWith('DRIVER: deliverd up fb4eb794-cba0-47de-8558-09875cf99455')
})
})