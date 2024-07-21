import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import RegisterPage from './pages/RegisterPage';
import AuthLayout from './layouts/auth/Layout';
import LoginPage from './pages/LoginPage';

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
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
