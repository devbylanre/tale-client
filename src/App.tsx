import React from 'react';
import Router from './Router';
import { ApolloProvider } from '@apollo/client';
import client from './config/apollo';

function App() {
  return (
    <ApolloProvider client={client}>
      <Router />
    </ApolloProvider>
  );
}

export default App;
