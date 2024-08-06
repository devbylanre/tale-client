import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import RegisterPage from './pages/RegisterPage';
import AuthLayout from './layouts/auth/Layout';
import LoginPage from './pages/LoginPage';
import AppLayout from './layouts/app/Layout';
import UserProvider from './contexts/UserContext';
import CategoryPage from './pages/CategoryPage';
import MediaPage from './pages/MediaPage';
import MediaProvider from './contexts/MediaContext';
import { QueryClientProvider } from '@tanstack/react-query';
import { ApolloProvider } from '@apollo/client';
import apolloClient from './configs/apolloConfig';
import queryClient from './configs/queryConfig';
import AuthProvider from './contexts/AuthContext';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      { index: true, element: <IndexPage /> },
      {
        path: 'auth',
        element: <AuthLayout />,
        children: [
          { path: 'new', element: <RegisterPage /> },
          { path: 'user', element: <LoginPage /> },
        ],
      },
      {
        path: 'app',
        element: <AppLayout />,
        children: [
          { path: 'media', element: <MediaPage /> },
          { path: 'categories', element: <CategoryPage /> },
        ],
      },
    ],
  },
]);

const Router = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ApolloProvider client={apolloClient}>
        <AuthProvider>
          <UserProvider>
            <MediaProvider>
              <RouterProvider router={router} />
            </MediaProvider>
          </UserProvider>
        </AuthProvider>
      </ApolloProvider>
    </QueryClientProvider>
  );
};

export default Router;
