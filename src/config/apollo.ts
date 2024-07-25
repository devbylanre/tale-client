import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  credentials: 'include',
  uri: 'http://localhost:4000/graphql/',
});

const authContext = setContext((request, hey) => {
  let TOKEN = JSON.parse(localStorage.getItem('accessToken') || '');

  console.log({ request, hey });

  return {
    headers: {
      authorization: TOKEN ? `Bearer ${TOKEN}` : '',
    },
  };
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authContext.concat(httpLink),
});

export default client;
