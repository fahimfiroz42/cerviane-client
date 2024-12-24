import { useParams } from "react-router-dom";
import RecommandationComment from "../Components/RecommandationComment";
import RecommendationForm from "../Components/Recommendationform";
import { useEffect, useState } from "react";
import axios from "axios";


const QuerieDetails = () => {

    const {id}=useParams()

    const [myQueries, setMyQueries] = useState({});
    const [recommendations, setRecommendations] = useState([]);

    useEffect(() => {
     fetchdata()
     fetchrecommendation()
    }, [id])
 
    const fetchdata=async()=>{
     const {data}=await axios.get(`http://localhost:5000/all-querie/${id}`) 
     setMyQueries(data)
    }

    const fetchrecommendation=async()=>{
        const {data}=await axios.get(`http://localhost:5000/all-recommendation-query/${id}`)
        setRecommendations(data)
    }

    const {
        boycottingReason,
        date,
        productBrand,
        productImageURL,
        productName,
        queryTitle,
        recommendationCount,
        time,
      } = myQueries ||{};
    
      return (
       <div className="">

<div className=" m my-10 w-11/12 mx-auto bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
          <img
            src={productImageURL}
            alt={productName}
            className="w-full h-96 object-contain"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800">{queryTitle}</h2>
            <p className="text-gray-600 mt-1">{boycottingReason}</p>
            <div className="mt-4">
              <p>
                <span className="font-semibold text-gray-700">Product Name: </span>
                {productName}
              </p>
              <p>
                <span className="font-semibold text-gray-700">Brand: </span>
                {productBrand}
              </p>
              <p>
                <span className="font-semibold text-gray-700">Recommendation Count: </span>
                {recommendationCount}
              </p>
            </div>
            <div className="mt-4 text-sm text-gray-500">
              <p>
                <span className="font-semibold">Date: </span>{date}
              </p>
              <p>
                <span className="font-semibold">Time: </span>{time}
              </p>
            </div>
          </div>
</div>

<div>
    <RecommendationForm  query={myQueries}   />
</div>

<div>
    <RecommandationComment recommendations={recommendations}/>
</div>
       </div>
      );
};

export default QuerieDetails;

