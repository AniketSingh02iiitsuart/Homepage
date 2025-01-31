import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Servicepage from './pages/Servicepage';
import Layout from './component/Layout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 
    children: [
      { 
        path: "/", 
        element: <Homepage /> 
      },
      { 
        path: "/Resources",
         element: <Servicepage /> 
        
      },
    ],
  },
 
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
