import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Error from "../Pages/Erorr";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";





const Route =createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      errorElement:<Error/>,
      children:[
        {
       path: "/",
       element: <Home />
       },
       {
        path:'/login',
        element:<Login/>

       },
       {
        path:'/register',
        element:<Register/>

       }
    
    
    ]
    },
  ]);

export default Route;