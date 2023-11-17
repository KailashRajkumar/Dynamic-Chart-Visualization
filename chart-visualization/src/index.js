import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home.jsx';
import Signup from './Pages/Signup.jsx';
import Login from './Pages/Login.jsx';
import School from './Pages/School.jsx';
import College from './Pages/College.jsx';
import DynamicList from './Pages/DynamicList.jsx';
import Logout from './Pages/Logout.jsx';

const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children: [{
    path: '',
    element: <Home />
  },
  {
    path: "School",
    element: <School />
  },
  {
    path: "College",
    element: <College />
  },
  {
    path: "DynamicList",
    element: <DynamicList />
  },
  {
    path: "Signup",
    element: <Signup />
  },
  {
    path: "Login",
    element: <Login />
  },
  {
    path: "Logout",
    element: <Logout />
  },

  ],
}]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
