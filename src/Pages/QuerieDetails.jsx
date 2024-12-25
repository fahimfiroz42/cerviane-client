import { useParams } from "react-router-dom";
import RecommandationComment from "../Components/RecommandationComment";
import RecommendationForm from "../Components/Recommendationform";
import { useEffect, useState } from "react";
import axios from "axios";
import useAxios from "../Hooks/useAxios";
import { ThumbsUp, Calendar, Clock, AlertCircle } from 'lucide-react'
import useTitle from "../Hooks/useTitle";


const QuerieDetails = () => {
    useTitle('Querie Details')
    const axiosSecurity=useAxios()

    const {id}=useParams()

    const [myQueries, setMyQueries] = useState({});
    const [recommendations, setRecommendations] = useState([]);

    useEffect(() => {
     fetchdata()
     fetchrecommendation()
    }, [id])
 
    const fetchdata=async()=>{
     const {data}=await axiosSecurity.get(`/all-querie/${id}`) 
     setMyQueries(data)
    }

    const fetchrecommendation=async()=>{
        const {data}=await axiosSecurity.get(`/all-recommendation-query/${id}`)
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
        querier
      } = myQueries ||{};
    
      return (
       <div className="">




<div className="w-11/12 my-20 mx-auto p-6 bg-secondary rounded-2xl shadow-lg">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Image Section */}
        <div className="relative">
          <img 
            src={productImageURL} 
            alt={productName}
            className="w-full h-[400px] object-cover rounded-xl shadow-md"
          />
          <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full shadow-md">
            <div className="flex items-center gap-2">
              <ThumbsUp className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">{recommendationCount}</span>
            </div>
          </div>
        </div>

        {/* Product Details Section */}
        <div className="flex flex-col justify-between">
          <div>
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-2xl font-bold text-dark">{productName}</h1>
                <p className="text-lg  bg-primary/20 badge mt-1">{productBrand}</p>
              </div>
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-2 text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">{date}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 mt-1">
                  <Clock className="w-4 h-4" />
                  <span className="text-sm">{time}</span>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-2">Query</h2>
              <p className="text-gray-700">{queryTitle}</p>
            </div>

            <div className="mt-6">
              <div className="flex items-center gap-2 text-red-500 mb-2">
                <AlertCircle className="w-5 h-5" />
                <h2 className="text-xl font-semibold">Boycotting Reason</h2>
              </div>
              <p className="text-gray-700">{boycottingReason}</p>
            </div>
          </div>

          {/* Querier Information */}
          <div className="mt-8 flex items-center gap-4 p-4 bg-white rounded-xl">
            <img 
              src={querier?.photo} 
              alt={querier?.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h3 className="font-medium text-gray-900">{querier?.name}</h3>
              <p className="text-sm text-gray-500">{querier?.email}</p>
            </div>
          </div>
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

