import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthPovider/AuthPovider";
import axios from "axios";


const RecommendationForMe = () => {
      const [recommendations, setRecommendations] = useState([]);
      const {user}=useContext(AuthContext)
      
    
      useEffect(() => {
       fetchdata()
      }, [user?.email])
    
      const fetchdata=async()=>{
       const {data}=await axios.get(`http://localhost:5000/all-recommendation-other/${user?.email}`) 
       setRecommendations(data)
      }
     
    

  // Function to delete a recommendation by id
  const handleDelete = (id) => {
    const filteredRecommendations = recommendations.filter(
      (recommendation) => recommendation.id !== id
    );
    setRecommendations(filteredRecommendations);
  };

  return (

    <div className="min-h-screen  w-11/12 mx-auto my-20 ">

<div className="container mx-auto p-6 bg-secondary rounded-lg shadow-md border border-gray-200">
      <h2 className="text-2xl font-semibold text-dark mb-4">Recommendations</h2>
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left font-semibold text-gray-700">Image</th>
            <th className="px-4 py-2 text-left font-semibold text-gray-700">Product Name</th>
            <th className="px-4 py-2 text-left font-semibold text-gray-700">Date</th>
            <th className="px-4 py-2 text-left font-semibold text-gray-700">Recommendation Title</th>
            <th className="px-4 py-2 text-left font-semibold text-gray-700">Action</th>
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
                <button
                  onClick={() => handleDelete(recommendation._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                >
                  Delete
                </button>
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