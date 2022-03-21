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
  mutation addUser($username: String!, $email: String!, $password: String!, $firstName: String!, $lastName: String!) {
    addUser(username: $username, email: $email, password: $password, firstName: $firstName, lastName: $lastName) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_EVENT = gql`
  mutation addEvent($title: String!, $contact: String!, $contactInfo: String!, $location: String!, $date: String!, $link: String!) {
    addEvent(title: $title, contact: $contact, contactInfo: $contactInfo, location: $location, date: $date, link: $link)
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
