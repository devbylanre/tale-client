import { useContext } from 'react';
import { AlertContext } from '../contexts/AlertContext';

const useAlert = () => {
  const context = useContext(AlertContext);

  if (context === null) {
    throw new Error('AlertContext must be used within an AlertProvider');
  }

  return context;
};

export default useAlert;
