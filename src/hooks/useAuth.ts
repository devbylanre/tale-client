import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('AuthContext not called within AuthProvider');
  }

  const { state, dispatch } = context;

  return { isLoggedIn: state.isLoggedIn, setAuth: dispatch };
};

export default useAuth;
