import AllQueriesCard from "../Components/AllQueriesCard";


const AllQueries = () => {
    return (
        <div className="w-11/12 mx-auto ">

            <div>
                

            </div>



            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-20">
                <AllQueriesCard/>
                <AllQueriesCard/>
                <AllQueriesCard/>
                <AllQueriesCard/>
                <AllQueriesCard/>
                <AllQueriesCard/>
            </div>
            
        </div>
    );
};

export default AllQueries;