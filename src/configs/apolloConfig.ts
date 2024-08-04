import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  credentials: 'include',
  uri: 'http://localhost:4000/graphql',
});

const authContext = setContext((request) => {
  const token = localStorage.getItem('accessToken');
  let accessToken = token ? JSON.parse(token) : '';

  return {
    headers: {
      authorization: accessToken ? `Bearer ${accessToken}` : '',
    },
  };
});

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: authContext.concat(httpLink),
});

export default apolloClient;
