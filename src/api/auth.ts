import { gql } from '@apollo/client';

const auth = {
  register: gql`
    mutation SignUp($payload: SignUpPayload!) {
      signUp(payload: $payload) {
        _id
        role
        status
        email
      }
    }
  `,
};

export default auth;
