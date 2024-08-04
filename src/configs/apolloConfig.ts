import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  credentials: 'include',
  uri: process.env.SERVER_URI,
});

const authContext = setContext((request) => {
  const token = localStorage.getItem('accessToken');
  let accessToken = '';

  if (token) {
    try {
      accessToken = JSON.parse(token);
    } catch (error) {
      console.error('Error parsing access token: ', token);
    }
  }

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
