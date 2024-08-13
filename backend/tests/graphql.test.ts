import request from 'supertest';
import { app } from '../src/server'; // Import the Express app
import User from '../src/models/user'; // Import your User model

describe('GraphQL API Tests', () => {
  beforeEach(async () => {
    await User.create({ username: 'testuser' });
  });

  afterEach(async () => {
    await User.deleteMany({});
  });

  it('Logs in user and returns user data', async () => {
    const loginMutation = `
      mutation login($username: String!) {
        login(username: $username) {
          id
          username
        }
      }
    `;

    const variables = { username: 'testuser' };

    const response = await request(app)
      .post('/graphql')
      .send({ query: loginMutation, variables })
      .expect(200);

    const res = response.body;

    expect(res.data.login).toEqual({
      id: expect.any(String),
      username: 'testuser'
    });
  });
});
