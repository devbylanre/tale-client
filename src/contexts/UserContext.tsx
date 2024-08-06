import { createContext, useReducer } from 'react';
import User from '../types/user';

const initialState: User.State = { user: undefined };

export const UserContext = createContext<User.Context | null>(null);

const reducer = (state: User.State, action: User.Action): User.State => {
  switch (action.type) {
    case 'GET':
      return { user: action.payload };
    case 'UPDATE':
      return { user: { ...state.user, ...action.payload } };
    case 'DELETE':
      return { user: action.payload };
  }
};

const UserProvider = ({ children }: React.PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
