import { useContext } from 'react';
import { ModalContext } from '../contexts/ModalContext';

const useModal = () => {
  const context = useContext(ModalContext);

  if (context === null) {
    throw new Error('useModal must be called within ModalProvider');
  }

  return context;
};

export default useModal;
