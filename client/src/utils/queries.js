import { gql } from "@apollo/client";

export const QUERY_EVENTS = gql`
  query event($title: String!, $description: String!, $contact: String!, $contactInfo: String!, $date: String!, $location: String!, $url: String!) {
    events(title: $title, description: $description, contact: $contact, contactInfo: $contactInfo, date: $date, location: $location, url: $url) {
      _id
      title
      description
      contact
      contactInfo
      date
      location
      url
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
      date
      location
      url
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
        title
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
