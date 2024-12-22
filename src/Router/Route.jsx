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
import MyRecommendation from "../Pages/MyRecommendation";
import RecommendationForMe from "../Pages/RecommendationForMe";
import AllQueries from "../Pages/AllQueries";
import UpdateQuery from "../Pages/UpdateQuery";





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
        path:'/allQueries',
        element:<AllQueries/>
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
        path:'/queryDetails/:id',
        element:<QuerieDetails/>
       },
       {
        path:'/myRecommendation',
        element:<MyRecommendation/>
       },
       {
        path:'/otherRecommendation',
        element:<RecommendationForMe/>
       },
       {
        path:'/updateQuery/:id',
        element:<UpdateQuery/>
       }
    
    
    ]
    },
  ]);

export default Route;