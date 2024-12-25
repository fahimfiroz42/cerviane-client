import AllQueriesCard from "../Components/AllQueriesCard";
import { TbLayoutGridFilled } from "react-icons/tb";
import { RiLayoutGrid2Fill } from "react-icons/ri";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const AllQueries = () => {
    const [gridLayout, setGridLayout] = useState(3);

    const [myQueries, setMyQueries] = useState([]);

    const [search, setSearch] = useState('');

   useEffect(() => {
    fetchdata()
   }, [ search])

   const fetchdata=async()=>{
    const {data}=await axios.get(`https://cervinae-server.vercel.app/all-queries?search=${search}`) 
    setMyQueries(data)
   

   }
  






   

    

    return (
        <div className="w-11/12 mx-auto ">



            <div className="">

            <div
  className="hero rounded-xl "
  style={{
    backgroundImage: "url(https://i.ibb.co.com/mH9PpDr/181387.jpg)",
  }}>
  <div className="hero-overlay bg-opacity-30 rounded-xl"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md my-16">
      <h1 className="mb-5 text-5xl text-dark font-bold">All Queries</h1>
      <p className="mb-5 text-dark/50">
        See all queries here and add new queries.
      </p>
     
    </div>
  </div>
           </div>



            </div>

            <div className="flex flex-col gap-2 md:flex-row justify-between items-center mt-20 border border-b-4 border-b-primary/30 py-4 px-2 rounded-2xl ">

                {/* search button */}
                <div>

                <label className="input input-bordered flex items-center gap-2">
           <input type="text" className="grow" placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
                <span className="btn btn-sm bg-primary text-white ">Search</span>
            </label>
                </div>

                <div className="space-x-4">

                    <button onClick={() => setGridLayout(2)}  className="btn text-xl"><TbLayoutGridFilled /></button>
                    <button  onClick={() => setGridLayout(3)} className="btn text-xl"><RiLayoutGrid2Fill /></button>


                </div>



            </div>



            <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 my-20 ${gridLayout === 2 ? 'lg:grid-cols-2' : 'lg:grid-cols-3'}`}>
                
                    {myQueries.map(query => <AllQueriesCard key={query._id} query={query} />)}
                
                
            </div>
            
        </div>
    );
};

export default AllQueries;