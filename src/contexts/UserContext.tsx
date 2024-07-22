import { createContext } from 'react';
import User from '../types/user';
import { ApolloError, useQuery } from '@apollo/client';
import userApi from '../apis/userApi';

type Context = {
  user: User.Props | null;
  isLoading: boolean;
  error: ApolloError | undefined;
};

export const UserContext = createContext<Context | null>(null);

type UserProviderProps = {
  children: React.ReactNode;
};
const UserProvider = ({ children }: UserProviderProps) => {
  const { loading, data, error } = useQuery(userApi.single, {
    onError: (error) => console.log({ error }),
  });

  return (
    <UserContext.Provider
      value={{ isLoading: loading, error: error, user: data?.user }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
