import CommentCard from "./CommentCard";


const RecommandationComment = ({recommendations}) => {

 

    return (
        <div>
            <div className="text-center my-10">
                <h1 className="text-3xl font-bold text-dark uppercase">All <spa className="text-primary">Recommendation</spa></h1>
                <p>See all the Recommendation here</p>
                <hr className="w-1/12 mx-auto border-2 border-primary" />




            </div>

            <div className="grid grid-cols-1  gap-4 w-11/12 mx-auto mb-20">

              {
                recommendations.map(recommendation=><CommentCard key={recommendation._id} recommendation={recommendation}></CommentCard>)
              }

            
            </div>
            
        </div>
    );
};

export default RecommandationComment;