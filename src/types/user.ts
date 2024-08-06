import React, { SetStateAction } from 'react';

namespace User {
  export type Type = {
    _id: string;
    firstName: string;
    lastName: string;
    role: string;
    email: string;
    status: string;
  };

  export type Action =
    | { type: 'GET'; payload: Type }
    | { type: 'UPDATE'; payload: Type }
    | { type: 'DELETE'; payload: undefined };

  export type State = {
    user: Type | undefined;
  };

  export type Context = {
    state: State;
    dispatch: React.Dispatch<Action>;
  };
}

export default User;
