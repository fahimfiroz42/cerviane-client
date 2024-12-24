import AllQueriesCard from "./AllQueriesCard";


const RecentQuerys = ({allQueries}) => {


    return (
        <div>


            <div className="text-center my-10">
                <h1 className="text-3xl font-bold text-dark uppercase">Recent <span className="text-primary">Query</span></h1>
                <p className="text-gray-500">See all the Recommendation here</p>
                <hr className="w-1/12 mx-auto border-2 border-primary" />
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-11/12 mx-auto mb-20">

                {
                    allQueries.map(query=><AllQueriesCard key={query._id} query={query}></AllQueriesCard>)
                }






            </div>
            
        </div>
    );
};

export default RecentQuerys;