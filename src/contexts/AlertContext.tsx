import { createContext, SetStateAction, useEffect, useState } from 'react';

type Context = {
  isVisible: boolean;
  setIsVisible: React.Dispatch<SetStateAction<boolean>>;
};

export const AlertContext = createContext<Context | null>(null);

type AlertProviderProps = {
  children: React.ReactNode;
  duration?: number;
};

const AlertProvider = ({ children, duration }: AlertProviderProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (duration !== undefined) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      });
      return () => clearTimeout(timer); // Clear timer when component unmounts
    }
  }, [duration]);

  if (!isVisible) {
    return null; // Don't render children when alert is not visible
  }

  return (
    <AlertContext.Provider value={{ isVisible, setIsVisible }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertProvider;
