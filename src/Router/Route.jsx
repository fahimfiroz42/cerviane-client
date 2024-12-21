import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Error from "../Pages/Erorr";
import MainLayout from "../MainLayout/MainLayout";
const Route =createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement:<Error/>
    },
  ]);

export default Route;