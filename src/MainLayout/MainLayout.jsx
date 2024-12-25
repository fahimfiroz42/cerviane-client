import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";


const MainLayout = () => {
    return (
        <div> 
            <Navbar/>
            <Outlet/>
            <ScrollRestoration/>

            <Footer/>


            
        </div>
    );
};

export default MainLayout;