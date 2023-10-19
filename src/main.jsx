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
import Login from './components/Login.jsx';
import SignIn from './components/SignIn.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import Users from './components/users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('http://localhost:5000/automotive')
  },
  {
    path: "/addAutomotive",
    element: <AddAutomotive></AddAutomotive>
  },
  {
    path: "/updateAutomotive/:id",
    element: <UpdateAutomotive></UpdateAutomotive>,
    loader: ({params}) => fetch(`http://localhost:5000/automotive/${params.id}`)
  },
  {
    path: "/signin",
    element: <SignIn></SignIn>
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: '/users',
    element: <Users></Users>,
    loader: () => fetch('http://localhost:5000/user')
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
