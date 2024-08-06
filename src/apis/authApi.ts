import { gql } from '@apollo/client';

const SIGN_UP = gql`
  mutation SignUp($payload: SignUpPayload!) {
    signUp(payload: $payload) {
      _id
      role
      status
      email
    }
  }
`;
const SIGN_IN = gql`
  mutation SignIn($payload: SignInPayload!) {
    signIn(payload: $payload) {
      accessToken
      refreshToken
    }
  }
`;

export { SIGN_IN, SIGN_UP };
