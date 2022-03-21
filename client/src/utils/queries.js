import { gql } from "@apollo/client";

export const QUERY_EVENTS = gql`
  query event($username: String) {
    events(username: $username) {
      _id
      eventText
      createdAt
      username
      }
    }
  }
`;

export const QUERY_EVENT = gql`
  query event($id: ID!) {
    event(_id: $id) {
      _id
      title
      description
      contact
      contactInfo
      location
      date
      link
      }
    }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      events {
        _id
        eventText
        createdAt
      }
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email

      events {
        _id
        thoughtText
        createdAt
      }
    }
  }
`;

export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
      email
    }
  }
`;
