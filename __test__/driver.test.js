'use strict';

const driver = require('../driver/driver');

describe('Driver Console Logs', () => {
  let consoleSpy;
  let customerOrder;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    customerOrder = {
      orderStore: 'Carfour',
      orderId: '9b8a70b8-49a8-4657-ab44-be1f8201291c',
      orderCustomer: 'Julia Balistreri',
      orderAddress: '420 Emory Shoal Apt. 681, Port Alberto, OR 03119'
    };
  });

  afterEach( () => {
    consoleSpy.mockRestore();
  });

  it('verifies that doPickup() logs a pickup properly', () => {
    driver.doPickup(customerOrder);
    expect(consoleSpy)
      .toHaveBeenCalledWith(`picking Up ${customerOrder.orderId}`);
  });
  it('verifies that doDelivery() logs a delivery properly', () => {
    driver.doDelivery(customerOrder);
    expect(consoleSpy)
      .toHaveBeenCalledWith(`Delivering up ${customerOrder.orderId}`);
  });
});