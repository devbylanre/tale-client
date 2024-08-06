namespace Auth {
  export type Type = { isLoggedIn: boolean };

  export type Action =
    | { type: 'LOGGED_IN'; payload: Type }
    | { type: 'LOGGED_OUT'; payload: Type };

  export type State = Type;

  export type Context = {
    state: State;
    dispatch: React.Dispatch<Action>;
  };
}

export default Auth;
