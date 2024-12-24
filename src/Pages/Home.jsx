import axios from "axios";
import Banner from "../Components/Banner";
import RecentQuerys from "../Components/RecentQuerys";
import { useEffect, useState } from "react";


const Home = () => {
     
      const [allQueries, setAllQueries] = useState([]);
        useEffect(() => {
          fetchdata()
         }, [ ])
      


    const fetchdata=async()=>{
        const {data}=await axios.get(`http://localhost:5000/recent-queries`) 
        setAllQueries(data)
       
    
       }
      



    return (
        <div>
            <Banner/>
            <RecentQuerys  allQueries={allQueries}/>
            
        </div>
    );
};

export default Home;