import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import IndexPage from './pages/IndexPage';

const router = createBrowserRouter([
  { path: '/', children: [{ index: true, element: <IndexPage /> }] },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
