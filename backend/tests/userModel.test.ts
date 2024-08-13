import User from '../src/models/user';
import mongoose from 'mongoose';


describe('User Model Test', () => {
  beforeEach(async () => {
    await User.deleteMany({});
  });

  it('should create a user successfully', async () => {
    const validUser = { username: 'testuser' };
    const user = new User(validUser);
    const savedUser = await user.save();

    expect(savedUser._id).toBeDefined();
    expect(savedUser.username).toBe(validUser.username);
  });

  it('should not allow duplicate usernames', async () => {
    const validUser = { username: 'testuser' };
    await new User(validUser).save();

    const duplicateUser = new User(validUser);
    let err;
    try {
      await duplicateUser.save();
    } catch (error) {
      err = error;
    }

    expect(err).toBeDefined();
    expect(err).toBeInstanceOf(mongoose.mongo.MongoServerError);
  });
});

export function MongoError(MongoError: any) {
    throw new Error('Function not implemented.');
}

