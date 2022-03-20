import { gql } from "@apollo/client";

export const LOGIN = gql`
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
  mutation addEvent($eventText: String!) {
    addEvent(eventtText: $eventText) {
      _id
      eventText
      createdAt
      username
      commentCount
      comments {
        _id
      }
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
