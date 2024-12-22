import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Error from "../Pages/Erorr";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddQueries from "../Pages/AddQueries";
import MyQueries from "../Pages/MyQueries";
import QuerieDetails from "../Pages/QuerieDetails";





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

       },
       {
        path:'/addQueries',
        element:<AddQueries/>

       },
       {
        path:'/myQueries',
        element:<MyQueries/>
       },
       {
        path:'/queryDetails',
        element:<QuerieDetails/>
       }
    
    
    ]
    },
  ]);

export default Route;