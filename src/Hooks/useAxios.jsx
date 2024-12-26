import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../AuthPovider/AuthPovider";
import { useNavigate } from "react-router-dom";

const axiosSecurity = axios.create({
    baseURL: 'https://cervinae-server.vercel.app',
    withCredentials: true,
});

const useAxios = () => {
    const { signOutUser } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        const interceptor = axiosSecurity.interceptors.response.use(
            (response) => response, 
            async (error) => {
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    await signOutUser();
                    navigate('/login');
                }
                return Promise.reject(error); 
            }
        );

        return () => {
            axiosSecurity.interceptors.response.eject(interceptor); // Cleanup on unmount
        };
    }, [navigate, signOutUser]);

    return axiosSecurity;
};

export default useAxios;
