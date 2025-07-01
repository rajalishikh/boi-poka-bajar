import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import DashBoard from './Component/DashBoard/dASHbOARD.JSX';
import ErrorPage from './Component/ErrorPage/ErrorPage';
import Homepage from './Component/Homepage/Homepage';
import MainHomepage from './Component/Mainhomepage/MainHomepage';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage></Homepage>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
      path:"/",
      element:<MainHomepage></MainHomepage>
    },
    {
      path:"/DashBoard",
      element:<DashBoard></DashBoard>
    }
  
  
  
  ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
