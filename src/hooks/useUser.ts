import { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';

const useUser = () => {
  const context = useContext(UserContext);

  if (context === null) {
    throw new Error('useUser must be used within a UserProvider');
  }

  const { state, dispatch } = context;

  return { user: state.user, setUser: dispatch };
};

export default useUser;
