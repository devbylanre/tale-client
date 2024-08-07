import React, { createContext, useEffect, useReducer } from 'react';
import Auth from '../types/auth';

const initialState: Auth.State = { isLoggedIn: false };

export const AuthContext = createContext<Auth.Context | null>(null);

const reducer = (_: Auth.State, action: Auth.Action): Auth.State => {
  switch (action.type) {
    case 'LOGGED_IN':
      return { isLoggedIn: true };
    case 'LOGGED_OUT':
      return { isLoggedIn: false };
  }
};

const AuthProvider = ({ children }: React.PropsWithChildren) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  let accessToken = localStorage.getItem('accessToken');

  useEffect(() => {
    if (!accessToken) {
      dispatch({ type: 'LOGGED_OUT', payload: { isLoggedIn: false } });
    }

    return () => {
      dispatch({ type: 'LOGGED_IN', payload: { isLoggedIn: true } });
    };
  }, [accessToken]);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
