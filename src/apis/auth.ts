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
  login: gql`
    mutation SignIn($payload: SignInPayload!) {
      signIn(payload: $payload) {
        accessToken
        refreshToken
      }
    }
  `,
};

export default auth;
