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
import PrivateRoute from "../PrivateRoute/PrivteRoute";
import AboutUs from "../Pages/AboutUs";
import FAQ from "../Pages/FAQ";
import ContactUs from "../Pages/ContactUs";





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
        element:<PrivateRoute><AddQueries/></PrivateRoute>

       },
       {
        path:'/myQueries',
        element:<PrivateRoute><MyQueries/></PrivateRoute>
       },
       {
        path:'/queryDetails/:id',
        element:<PrivateRoute> <QuerieDetails/> </PrivateRoute>
       },
       {
        path:'/myRecommendation',
        element:<PrivateRoute><MyRecommendation/></PrivateRoute>
       },
       {
        path:'/otherRecommendation',
        element:<PrivateRoute><RecommendationForMe/></PrivateRoute>
       },
       {
        path:'/updateQuery/:id',
        element:<PrivateRoute><UpdateQuery/></PrivateRoute>
       },
       {
        path:'/aboutus',
        element:<AboutUs/>
       },
       {
        path:'/faq',
        element:<FAQ/>
       },
       {
       path:'/contactus',
       element:<ContactUs/> 
       }
    
    
    ]
    },
  ]);

export default Route;