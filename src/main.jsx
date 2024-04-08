import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './Pages/ErrorPage';
import Home from './Pages/Home';
import UpdateProfile from './Pages/UpdateProfile';
import Userprofile from './Pages/Userprofile';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Roots from './Components/Roots';
import AuthProvider from './Provider/AuthProvider';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Roots></Roots>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/updateProfile',
        element: <UpdateProfile></UpdateProfile>,
      },
      {
        path: '/userProfile',
        element: <Userprofile></Userprofile>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
