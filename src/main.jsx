import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import BookDetails from './Component/BookDetails/BookDetails';
import DashBoard from './Component/Dashboard/Dashboard';
import ErrorPage from './Component/ErrorPage/ErrorPage';
import Homepage from './Component/Homepage/Homepage';
import ListedBook from './Component/ListedBook/ListedBook';
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
      path:"books/:detailsId",
      element:<BookDetails></BookDetails>,
      loader:()=>fetch("/public/booksData.json") //This is most bad way to data load .

    },
    {
      path:"/ListedBook",
      element:<ListedBook></ListedBook>,
      loader:()=>fetch("/public/booksData.json")  //This is most bad way to data load .
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
