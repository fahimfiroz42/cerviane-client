import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {

  RouterProvider
} from "react-router-dom";
import './index.css'

import Route from './Router/Route.jsx';
import AuthContextProvider from './AuthPovider/AuthPovider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <RouterProvider router={Route} />
    </AuthContextProvider>
    
  </StrictMode>,
)
