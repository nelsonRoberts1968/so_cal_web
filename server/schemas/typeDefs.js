// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    username: String
    email: String
    eventCount: Int
    events: [Event]
  }

  type Event {
    _id: ID
    eventName: String
    eventText: String
    createdAt: String
    username: String
    commentCount: Int
    comments: [Comment]
  }

  type Comment {
    _id: ID
    commentBody: String
    createdAt: String
    username: String
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    events(username: String): [Event]
    event(_id: ID!): Event
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(firstName: String!, lastName: String!, username: String!, email: String!, password: String!): Auth
    addEvent(username: String!, eventName: String!, eventText: String!): Event
    addComment(eventId: ID!, commentBody: String!): Event   
  }

  type Auth {
    token: ID!
    user: User
  }
 
`;

// export the typeDefs
module.exports = typeDefs;