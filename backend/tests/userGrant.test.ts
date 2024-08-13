import { resolvers } from '../src/resolvers';
import User from '../src/models/user';
import Grant from '../src/models/grant';
import UserGrant from '../src/models/userGrant';

beforeEach(async () => {
  await User.deleteMany({});
  await Grant.deleteMany({});
  await UserGrant.deleteMany({});

  const user = await User.create({ username: 'testuser' });
  const grant = await Grant.create({
    name: 'Test Grant',
    foundation: 'Test Foundation',
    location: 'Test Location',
    amount: 1000,
    deadline: new Date(),
    area: ['Education'],
  });

  await UserGrant.create({ user: user._id, grant: grant._id, status: 'NEW' });
});

describe('Change Grant Status Resolver Test', () => {
  it('should change the status of an existing UserGrant', async () => {
    const user = await User.findOne({ username: 'testuser' });
    const grant = await Grant.findOne({ name: 'Test Grant' });

    if (!user) {
        throw new Error('Test user not found');
      }
      if (!grant) {
        throw new Error('Test grant not found');
      }
    const updatedGrant = await resolvers.changeGrantStatus({
      userId: user._id.toString(),
      grantId: grant._id.toString(),
      status: 'LIKED',
      feedback: 'Great grant',
    });
    
    
    if (!updatedGrant) {
        throw new Error('Updated grant not found');
      }
    expect(updatedGrant).toBeDefined();
    expect(updatedGrant.name).toBe('Test Grant');

    const userGrant = await UserGrant.findOne({ user: user._id, grant: grant._id });
    if (!userGrant) {
        throw new Error('Updated grant not found');
      }
    expect(userGrant.status).toBe('LIKED');
    expect(userGrant.feedback).toBe('Great grant');
    expect(userGrant.matchDate).toBeDefined();
  });

});
