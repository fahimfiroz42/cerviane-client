import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../AuthPovider/AuthPovider";
import { useNavigate } from "react-router-dom";

export const axiosSecurity=axios.create({
    baseURL:'http://localhost:5000',
    withCredentials:true,

})
const useAxios = () => {
    const {signOutUser}=useContext(AuthContext)
    const navigate=useNavigate()
  useEffect(()=>{
    axiosSecurity.interceptors.response.use(
        (response) =>{
            return response
        }, async (error) => {
            if(error.response.status===401 || error.response.status===403){
    
                await signOutUser()
                navigate('/login')
    
        }
        }
       )
  },[navigate, signOutUser])

  return axiosSecurity
};

export default useAxios;