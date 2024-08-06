import { gql } from '@apollo/client';

const GET_USER = gql`
  query GetUser {
    user {
      _id
      firstName
      lastName
      email
      role
      status
    }
  }
`;

export { GET_USER };
