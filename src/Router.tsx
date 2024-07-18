import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import IndexPage from './pages/IndexPage';
import RegisterPage from './pages/RegisterPage';

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      { index: true, element: <IndexPage /> },
      { path: 'auth', children: [{ path: 'new', element: <RegisterPage /> }] },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
