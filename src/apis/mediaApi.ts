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

export { GET_MULTIPLE_MEDIA };
