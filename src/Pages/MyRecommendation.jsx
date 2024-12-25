
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthPovider/AuthPovider";
import useAxios from "../Hooks/useAxios";
import Swal from "sweetalert2";

const MyRecommendation = () => {
    const axiosSecurity=useAxios()
  const {user}=useContext(AuthContext)
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
   fetchdata()
  }, [user?.email])

  const fetchdata=async()=>{
   const {data}=await axiosSecurity.get(`/all-recommendation/${user?.email}`) 
   setRecommendations(data)
  }
 

  // Function to delete a recommendation by id
  const handleDelete = (id) => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          

        axios.delete(`https://cervinae-server.vercel.app/delete-recommendation/${id}`)
        .then(res=>{if(res.data.deletedCount>0){
            Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
           
          const filteredRecommendations = recommendations.filter(
            (recommendation) => recommendation.id !== id
          );
          setRecommendations(filteredRecommendations);
         

        }})
        }
      })
   
  };

  return (

    <div className="min-h-screen  w-11/12 mx-auto mt-10 ">

        <div>
        <div
  className="hero "
  style={{
    backgroundImage: "url(https://i.ibb.co.com/4jnc4jf/Free-Vector-Abstract-geometric-wireframe-background.jpg)",
  }}>
  <div className="hero-overlay bg-opacity-20"></div>
  <div className="hero-content text-dark-content text-center py-20">
    <div className="max-w-xl">
      <h1 className="mb-5 text-4xl font-bold">Recommendation Made By You</h1>
      <p className="mb-5">
        <span className="font-bold">{user?.displayName}</span> see all the recommendation made by you.And you can delete them.
      </p>
      
    </div>
  </div>
</div>


        </div>

<div className="container mx-auto p-6 bg-secondary rounded-lg shadow-md border border-gray-200">
      <h2 className="text-2xl font-semibold text-dark mb-4">Recommendations <span className="badge bg-primary/30">{recommendations.length}</span></h2>
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

export default MyRecommendation;

