import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Servicepage from './pages/Servicepage';
import Aboutuspage from './pages/Aboutuspage';
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
      {
        path:"/About",
        element:<Aboutuspage/>

      },
    ],
  },
 
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
