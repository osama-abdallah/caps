'use strict';

const { logEvent } = require('../caps/modules/logEvent');

describe('CAPS Console Logs', () => {
  let consoleSpy;
  let customerOrder;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    customerOrder = {
      orderStore: 'Carfour',
      orderId: '9b8a70b8-49a8-4657-ab44-be1f8201291c',
      orderCustomer: 'Julia Balistreri',
      orderAddress: '420 Emory Shoal Apt. 681, Port Alberto, OR 03119',
    };
  });

  afterEach( () => {
    consoleSpy.mockRestore();
  });

  it('verifies the "pickup" emit triggers console logs in CAPS', () => {
    logEvent('pickup', customerOrder);
    expect(consoleSpy).toHaveBeenCalledTimes(1); 
  });
  it('verifies the "in-transit" emit triggers console logs in CAPS', () => {
    logEvent('in-transit', customerOrder);
    expect(consoleSpy).toHaveBeenCalledTimes(1); 
  });
  it('verifies the "delivered" emit triggers console logs in CAPS', () => {
    logEvent('delivered', customerOrder);
    expect(consoleSpy).toHaveBeenCalledTimes(1); 
  });
});