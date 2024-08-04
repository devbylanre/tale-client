import { createContext, SetStateAction, useState } from 'react';

type Context = {
  isVisible: boolean;
  setIsVisible: React.Dispatch<SetStateAction<boolean>>;
};

export const ModalContext = createContext<Context | null>(null);

type ModalProviderProps = {
  open?: boolean;
  children: ((args: Context) => React.ReactNode) | React.ReactNode;
};

const ModalProvider = ({ children, open = false }: ModalProviderProps) => {
  const [isVisible, setIsVisible] = useState(open);

  return (
    <ModalContext.Provider value={{ isVisible, setIsVisible }}>
      {typeof children === 'function'
        ? children({ isVisible, setIsVisible })
        : children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
