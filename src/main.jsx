import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddAutomotive from './components/AddAutomotive.jsx';
import UpdateAutomotive from './components/UpdateAutomotive.jsx';
import Login from './components/Login/Login.jsx';
import Users from './components/users.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import Register from './components/Login/Register.jsx';
import { ToastBar } from 'react-hot-toast';
import BrandDetails from './components/BrandDetails/BrandDetails.jsx';
import ProductDetails from './components/ProductDetails/ProductDetails.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('http://localhost:5000/automotive')
  },
  {
    path: "/brands/:brandName",
    element: <BrandDetails />,
    loader: ({params}) => fetch(`http://localhost:5000/automotive/${params.brandName}`)
  },
  {
    path: "/addAutomotive",
    element: <AddAutomotive></AddAutomotive>
  },
  {
    path: "/details/:id",
    element: <PrivateRoute><ProductDetails /></PrivateRoute>,
    loader: ({params}) => fetch(`http://localhost:5000/details/${params.id}`)
  },
  {
    path: "/update/:id",
    element: <UpdateAutomotive></UpdateAutomotive>,
    loader: ({params}) => fetch(`http://localhost:5000/details/${params.id}`)
  },

  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: "/register",
    element: <Register></Register>
  },
  {
    path: '/users',
    element: <Users></Users>,
    loader: () => fetch('http://localhost:5000/user')
  }
]);

<ToastBar></ToastBar>
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router}/></AuthProvider>
  </React.StrictMode>,
)
