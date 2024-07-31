import { gql } from '@apollo/client';

const GET_MULTIPLE_MEDIA = gql`
  query Medias {
    medias {
      _id
      hash
      name
      path
      size
      uri
      alt
      createdAt
    }
  }
`;

const GET_SINGLE_MEDIA = gql`
  query Media($id: ID!) {
    media(id: $id) {
      _id
      hash
      name
      path
      size
      uri
      alt
      createdAt
      # user {
      #   _id
      #   role
      #   status
      #   email
      #   password
      #   firstName
      #   lastName
      # }
    }
  }
`;

export { GET_MULTIPLE_MEDIA, GET_SINGLE_MEDIA };
