import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import mongoose from 'mongoose';
import { schema } from './schema';
import { resolvers } from './resolvers';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

export const app = express();

app.use(cors({
  origin: 'http://localhost:3000', 
  credentials: true,
}));

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: resolvers,
  graphiql: true,
}));

const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://root:example@localhost:27017/grantsDashboard';

if (process.env.NODE_ENV !== 'test') {
    mongoose.connect(MONGO_URI, {
      dbName: 'grantsDashboard',
    }).then(() => {
      app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}/graphql`);
      });
    }).catch(err => {
      console.error('Connection error', err.message);
    });
}

