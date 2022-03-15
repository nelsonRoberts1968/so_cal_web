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
    postCount: Int
    events: [Event]
    posts: [Post]
  }

  type Event {
    _id: ID
    username: String
    eventName: String
    eventText: String
    createdAt: String
  }

  type Post {
    _id: ID
    postName: String
    postText: String
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
    posts(username: String): [Post]
    post(_id: ID!): Post
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(firstName: String!, lastName: String!, username: String!, email: String!, password: String!): Auth
    addEvent(username: String!, eventName: String!, eventText: String!): Event
    addPost(postText: String!): Post
    addComment(postId: ID!, commentBody: String!): Post   
  }

 
`;

// export the typeDefs
module.exports = typeDefs;