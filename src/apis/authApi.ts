import { gql } from '@apollo/client';

const authApi = {
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

export default authApi;
