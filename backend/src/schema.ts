
import { buildSchema } from 'graphql';

export const schema = buildSchema(`

enum Status {
    NEW
    LIKED
    DISLIKED
  }  

type User {
      id: ID!
      username: String!
  }

  type Grant {
    id: ID!
    name: String!
    foundation: String!
    location: String!
    amount: Float!
    deadline: String!
    area: [String!]!
    logo: String
  }

  type UserGrant {
    user: User!
    grant: Grant!
    feedback: String
    status: Status!
    matchDate: String
  }

  type Query {
    user(username: String!): User
    grantsByStatus(userId: ID!, status: Status!): [Grant!]!
  }

  type Mutation {
    changeGrantStatus(userId: ID!, grantId: ID!, status: Status!, feedback: String!): Grant
    login(username: String!): User
  }
`);
