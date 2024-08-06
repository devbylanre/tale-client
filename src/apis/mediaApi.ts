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

const UPDATE_MEDIA = gql`
  mutation UpdateMedia($id: ID!, $payload: UpdateMediaPayload!) {
    updateMedia(id: $id, payload: $payload) {
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

const DELETE_MEDIA = gql`
  mutation DeleteMedia($id: ID!) {
    deleteMedia(id: $id) {
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

const CREATE_MEDIAS = async (params: { files: File[] }) => {
  const { files } = params;
  const payload = new FormData();

  files.forEach((file) => payload.append('medias', file));

  const token = localStorage.getItem('accessToken');
  const accessToken = token ? JSON.parse(token) : '';

  try {
    const response = await fetch(`http://localhost:4000/rest/medias/`, {
      mode: 'cors',
      method: 'POST',
      body: payload,
      credentials: 'include',
      headers: { authorization: `Bearer ${accessToken}` },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Unable to upload media');
    }

    return data;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export {
  GET_MULTIPLE_MEDIA,
  GET_SINGLE_MEDIA,
  UPDATE_MEDIA,
  DELETE_MEDIA,
  CREATE_MEDIAS,
};
