import { gql } from '@apollo/client';

const userApi = {
  single: gql`
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
  `,
};

export default userApi;
