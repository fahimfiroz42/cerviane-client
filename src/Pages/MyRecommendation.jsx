import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthPovider/AuthPovider";
import useAxios from "../Hooks/useAxios";
import Swal from "sweetalert2";
import Loader from "../Components/Loader";
import useTitle from "../Hooks/useTitle";
import { useNavigate } from "react-router-dom";


const MyRecommendation = () => {
    useTitle('My Recommendation')
  const axiosSecurity = useAxios();
  const { user } = useContext(AuthContext);
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, [user?.email]);

  const fetchData = async () => {

    setLoading(true);
    try {
      const { data } = await axiosSecurity.get(`/all-recommendation/${user?.email}`);
      setRecommendations(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://cervinae-server.vercel.app/delete-recommendation/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              const filteredRecommendations = recommendations.filter(
                (recommendation) => recommendation._id !== id
              );
              setRecommendations(filteredRecommendations);
            }
          });
      }
    });
  };

  return (
    <div className="min-h-screen w-11/12 mx-auto mt-10">
      {loading && (
        <div className="text-center my-10">
          <Loader />
        </div>
      )}

      {/* Stylish Banner */}
      <div className="relative hero bg-gradient-to-r from-primary via-light to-secondary">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/4jnc4jf/Free-Vector-Abstract-geometric-wireframe-background.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.3,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark opacity-60"></div>

        <div className="relative z-10 hero-content text-center text-dark py-10 md:py-20 px-4">
          <div className="max-w-xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-extrabold mb-5 tracking-wide leading-tight">
              Recommendations Made By You
            </h1>
            <p className="mb-5 text-base md:text-lg font-light">
              <span className="font-bold">{user?.displayName}</span>, see all the recommendations you
              have made. You can manage them easily here.
            </p>
            <button onClick={()=> navigate('/myQueries')} className="mt-5 px-6 py-3 bg-white text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
              Add New Recommendation
            </button>
          </div>
        </div>
      </div>

      {/* Space Between Banner and Table */}
      <div className="mt-8"></div>

      {/* Recommendations List */}
      <div className="container mx-auto mb-28 p-4 sm:p-6 bg-light rounded-lg shadow-md border border-gray-200">
        <h2 className="text-lg sm:text-2xl font-semibold mb-4 text-dark">
          Recommendations <span className="badge bg-primary/30">{recommendations.length}</span>
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left font-semibold text-gray-700">Image</th>
                <th className="px-4 py-2 text-left font-semibold text-gray-700">Product Name</th>
                <th className="px-4 py-2 text-left font-semibold text-gray-700">Date</th>
                <th className="px-4 py-2 text-left font-semibold text-gray-700">
                  Recommendation Title
                </th>
                <th className="px-4 py-2 text-left font-semibold text-gray-700">Action</th>
              </tr>
            </thead>
            <tbody>
              {recommendations.map((recommendation) => (
                <tr key={recommendation._id} className="border-b">
                  <td className="px-4 py-2">
                    <img
                      src={recommendation.productImage}
                      alt={recommendation.recommendationProductName}
                      className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-md"
                    />
                  </td>
                  <td className="px-4 py-2 text-sm md:text-base">
                    {recommendation.recommendationProductName}
                  </td>
                  <td className="px-4 py-2 text-sm md:text-base">{recommendation.date}</td>
                  <td className="px-4 py-2 text-sm md:text-base">
                    {recommendation.recommendationTitle}
                  </td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => handleDelete(recommendation._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 text-sm md:text-base"
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
    </div>
  );
};

export default MyRecommendation;
