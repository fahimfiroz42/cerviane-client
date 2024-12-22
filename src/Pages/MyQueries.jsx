import { Link } from "react-router-dom";
import MyQueriesCard from "../Components/MyQueriesCard";


const MyQueries = () => {
    return (
        <div >
          
          {/*banner */}

            <div>
            <div
  className="hero "
  style={{
    backgroundImage: "url(https://i.ibb.co.com/bswcJdc/110030.jpg)",
  }}>
  <div className="hero-overlay bg-opacity-30"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md my-16">
      <h1 className="mb-5 text-5xl text-dark font-bold">My Queries</h1>
      <p className="mb-5 text-dark/50">
        See your queries here and add new queries.You can also edit or delete your queries
      </p>
      <Link to={'/addQueries'}><button className="btn bg-primary text-white text-xl hover:bg-secondary hover:text-black">ADD QUEREY</button></Link>
    </div>
  </div>
</div>


            </div>


           



           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-20 w-11/12 mx-auto">

           <MyQueriesCard/>
           <MyQueriesCard/>
           <MyQueriesCard/>
           <MyQueriesCard/>
           <MyQueriesCard/>
           <MyQueriesCard/>

           </div>
            
        </div>
    );
};

export default MyQueries;