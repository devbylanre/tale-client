import React, { SetStateAction, useState } from 'react';

type Context = {
  activeTab: string;
  setActiveTab: React.Dispatch<SetStateAction<string>>;
};

export const TabsContext = React.createContext<Context | null>(null);

type TabsProviderProps = {
  defaultTab?: string;
  children: React.ReactNode;
};

const TabsProvider = ({ defaultTab = '', children }: TabsProviderProps) => {
  const [activeTab, setActiveTab] = useState<string>(defaultTab);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      {' '}
      {children}
    </TabsContext.Provider>
  );
};

export default TabsProvider;
