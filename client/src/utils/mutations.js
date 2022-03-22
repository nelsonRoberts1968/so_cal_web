import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_EVENT = gql`
  mutation addEvent($title: String!, $description: String!, $contact: String!, $contactInfo: String!, $date: String!, $location: String!, $url: String! ) {
    addEvent(title: $title, description: $description, contact: $contact, contactInfo: $contactInfo, date: $date, location: $location, url: $url) {
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

export const ADD_COMMENT = gql`
  mutation addCOMMENT($eventId: ID!, $commentBody: String!) {
    addComment(eventId: $eventId, commentBody: $commentBody) {
      _id
      commentCount
      comments {
        _id
        commentBody
        createdAt
        username
      }
    }
  }
`;
