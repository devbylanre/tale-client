import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql/',
});

const authContext = setContext((request) => {
  let TOKEN = JSON.parse(localStorage.getItem('accessToken') || '');

  console.log(request.context);

  return {
    headers: {
      authorization: TOKEN ? `Bearer ${TOKEN}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authContext.concat(httpLink),
  credentials: 'include',
  cache: new InMemoryCache(),
});

export default client;
