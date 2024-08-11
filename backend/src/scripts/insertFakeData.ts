import mongoose from 'mongoose';
import Grant from '../models/grant';
import User from '../models/user';
import UserGrant from '../models/userGrant';

// Define an enum for grant statuses
enum GrantStatus {
  NEW = 'NEW',
  LIKED = 'LIKED',
  DISLIKED = 'DISLIKED',
}

// MongoDB connection
const MONGO_URI = process.env.MONGO_URI || 'mongodb://root:example@mongodb:27017/grantsDashboard?authSource=admin';

mongoose
  .connect(MONGO_URI)
  .then(async () => {
    console.log('Connected to MongoDB');

    // Clear existing data
    await User.deleteMany({});
    await Grant.deleteMany({});
    await UserGrant.deleteMany({});

    // Create a user
    const user = await User.create({ username: 'testuser' });
    console.log('User created:', user);

    // Create grants
    const grantsData = [
      {
        name: 'Grant 1',
        foundation: 'Foundation A',
        location: 'City A',
        amount: 10000,
        deadline: new Date('2024-12-31'),
        area: ['Education', 'Science'],
        logo: 'logo1.png',
      },
      {
        name: 'Grant 2',
        foundation: 'Foundation B',
        location: 'City B',
        amount: 20000,
        deadline: new Date('2024-11-30'),
        area: ['Health', 'Technology'],
        logo: 'logo2.png',
      },
      {
        name: 'Grant 3',
        foundation: 'Foundation C',
        location: 'City C',
        amount: 15000,
        deadline: new Date('2024-10-31'),
        area: ['Environment', 'Research'],
        logo: 'logo3.png',
      },
      {
        name: 'Grant 4',
        foundation: 'Foundation D',
        location: 'City D',
        amount: 5000,
        deadline: new Date('2024-09-30'),
        area: ['Arts', 'Culture'],
        logo: 'logo4.png',
      },
      {
        name: 'Grant 5',
        foundation: 'Foundation E',
        location: 'City E',
        amount: 7500,
        deadline: new Date('2024-08-31'),
        area: ['Education', 'Health'],
        logo: 'logo5.png',
      },
      {
        name: 'Grant 6',
        foundation: 'Foundation F',
        location: 'City F',
        amount: 12500,
        deadline: new Date('2024-07-31'),
        area: ['Technology', 'Innovation'],
        logo: 'logo6.png',
      },
      {
        name: 'Grant 7',
        foundation: 'Foundation G',
        location: 'City G',
        amount: 11000,
        deadline: new Date('2024-06-30'),
        area: ['Science', 'Environment'],
        logo: 'logo7.png',
      },
      {
        name: 'Grant 8',
        foundation: 'Foundation H',
        location: 'City H',
        amount: 9000,
        deadline: new Date('2024-05-31'),
        area: ['Research', 'Culture'],
        logo: 'logo8.png',
      },
      {
        name: 'Grant 9',
        foundation: 'Foundation I',
        location: 'City I',
        amount: 13000,
        deadline: new Date('2024-04-30'),
        area: ['Health', 'Arts'],
        logo: 'logo9.png',
      },
      {
        name: 'Grant 10',
        foundation: 'Foundation J',
        location: 'City J',
        amount: 14000,
        deadline: new Date('2024-03-31'),
        area: ['Education', 'Innovation'],
        logo: 'logo10.png',
      },
    ];

    const grants = await Grant.insertMany(grantsData);
    console.log('Grants created:', grants);

    // Create userGrant connections with initial status NEW
    const userGrants = grants.map((grant: { _id: any }) => ({
      user: user._id,
      grant: grant._id,
      status: GrantStatus.NEW, // Initial status
    }));

    await UserGrant.insertMany(userGrants);
    console.log('UserGrant connections created:', userGrants);

    // Close the connection
    mongoose.connection.close();
    console.log('Database populated successfully');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB', err);
  });
