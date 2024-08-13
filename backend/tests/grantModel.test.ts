import mongoose from 'mongoose';
import Grant from '../src/models/grant';


describe('Grant Model Test', () => {
  beforeEach(async () => {
    await Grant.deleteMany({});
  });

  it('should create a grant successfully', async () => {
    const validGrant = {
      name: 'Test Grant',
      foundation: 'Test Foundation',
      location: 'Test Location',
      amount: 1000,
      deadline: new Date(),
      area: ['Test1', 'Test2'],
    };

    const grant = new Grant(validGrant);
    const savedGrant = await grant.save();

    expect(savedGrant._id).toBeDefined();
    expect(savedGrant.name).toBe(validGrant.name);
    expect(savedGrant.foundation).toBe(validGrant.foundation);
  });

  it('should throw validation error without required fields', async () => {
    const invalidGrant = new Grant({}); 

    let err: any;
    try {
      await invalidGrant.save();
    } catch (error) {
      err = error;
    }

    expect(err).toBeDefined();
    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
  });
});
