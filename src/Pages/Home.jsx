import axios from "axios";
import Banner from "../Components/Banner";
import RecentQuerys from "../Components/RecentQuerys";
import { useEffect, useState } from "react";
import CommunitySection from "../Components/Community";
import OpinionSection from "../Components/Opinion";
import Collaborate from "../Components/Collaborate";
import HowCanHelp from "../Components/HowCanHelp";
import useTitle from "../Hooks/useTitle";
import ProductPromotion from "../Components/ProductPromotion";


const Home = () => {

    useTitle('Home')
     
      const [allQueries, setAllQueries] = useState([]);
        useEffect(() => {
          fetchdata()
         }, [ ])
      


    const fetchdata=async()=>{
        const {data}=await axios.get(`https://cervinae-server.vercel.app/recent-queries`) 
        setAllQueries(data)
       
    
       }
      



    return (
        <div>
            <Banner/>
            <RecentQuerys  allQueries={allQueries}/>
            <CommunitySection/>
            <OpinionSection />
            <Collaborate />
            <ProductPromotion/>
            {/* this is how can help */}
            <HowCanHelp />
            
        </div>
    );
};

export default Home;