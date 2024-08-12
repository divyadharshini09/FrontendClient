import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import { createRoot } from "react-dom/client";
import Header from './Header';
import Register from './Register';
import Login from './Login';
import Contact from './Contact';
import Profile from './Profile'
import {createBrowserRouter,RouterProvider,Route,Link,} from 'react-router-dom';
const router = createBrowserRouter([
  {
     path: "/",
     element: <Header/>
  },
  {
   path: "/Register",
   element: <Register/>
  },
  {
   path: "/Login",
   element: <Login/>
  },
  {
    path: "/Contact",
    element: <Contact/>
  },
  {
    path: "/Profile",
    element: <Profile/>
  }
]);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <App/>
  </React.StrictMode>
);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals/
