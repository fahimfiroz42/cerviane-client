import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthPovider/AuthPovider";
import axios from "axios";
import useAxios from "../Hooks/useAxios";


const RecommendationForMe = () => {
    const axiosSecurity=useAxios()
      const [recommendations, setRecommendations] = useState([]);
      const {user}=useContext(AuthContext)
      
    
      useEffect(() => {
       fetchdata()
      }, [user?.email])
    
      const fetchdata=async()=>{
       const {data}=await axiosSecurity.get(`/all-recommendation-other/${user?.email}`) 
       setRecommendations(data)
      }
     
    



  return (

    <div className="min-h-screen  w-11/12 mx-auto mt-10 ">

        <div className="">
        <div
  className="hero "
  style={{
    backgroundImage: "url(https://i.ibb.co.com/ZKfQr8m/Free-Vector-abstract-colorful-banners-collection.jpg)",
  }}>
  <div className="hero-overlay bg-opacity-20"></div>
  <div className="hero-content text-neutral-content text-center p-20">
    <div className="max-w-md">
      <h1 className="mb-5 text-4xl font-bold text-dark">Recommendation For You</h1>
      <p className="mb-5 text-dark">
       <span className="font-bold"> {user?.displayName}</span> there are all recommendation for your query.Check out the suggestions other users give to you. 
      </p>
     
    </div>
  </div>
</div>

            
        </div>

<div className="container mx-auto p-6 bg-secondary rounded-lg shadow-md border border-gray-200">
      <h2 className="text-2xl font-semibold text-dark mb-4">Recommendations <span className="badge bg-primary/30">{recommendations.length}</span> </h2> 
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left font-semibold text-gray-700">Image</th>
            <th className="px-4 py-2 text-left font-semibold text-gray-700">Product Name</th>
            <th className="px-4 py-2 text-left font-semibold text-gray-700">Date</th>
            <th className="px-4 py-2 text-left font-semibold text-gray-700">Recommendation Title</th>
            
          </tr>
        </thead>
        <tbody>
          {recommendations.map((recommendation) => (
            <tr key={recommendation.id} className="border-b">
              <td className="px-4 py-2">
                <img
                  src={recommendation.productImage}
                  alt={recommendation.recommendationProductName}
                  className="w-16 h-16 object-cover rounded-md"
                />
              </td>
              <td className="px-4 py-2">{recommendation.recommendationProductName}</td>
              <td className="px-4 py-2">{recommendation.date}</td>
              <td className="px-4 py-2">{recommendation.recommendationTitle}</td>
              <td className="px-4 py-2">
                
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    </div>
   
  );
};

export default RecommendationForMe;