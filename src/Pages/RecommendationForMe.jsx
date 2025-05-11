import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthPovider/AuthPovider";
import useAxios from "../Hooks/useAxios";
import Loader from "../Components/Loader";
import useTitle from "../Hooks/useTitle";

const RecommendationForMe = () => {
    useTitle('Other Recommendation')
  const axiosSecurity = useAxios();
  const [recommendations, setRecommendations] = useState([]);
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, [user?.email]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const { data } = await axiosSecurity.get(`/all-recommendation-other/${user?.email}`);
      setRecommendations(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-11/12 mx-auto mt-10">
      {loading && (
        <div className="text-center my-10">
          <Loader />
        </div>
      )}

      
      {/* theme change */}

      {/* Stylish Banner */}
      <div className="relative hero bg-gradient-to-r from-primary via-light to-secondary ">
        <div
          className="absolute inset-0 "
          style={{
            backgroundImage:
              "url(https://i.ibb.co/ZKfQr8m/Free-Vector-abstract-colorful-banners-collection.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.3,
           
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark opacity-60"></div>

        <div className="relative z-10 hero-content text-center py-10 md:py-20 px-4">
          <div className="max-w-xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-extrabold text-dark mb-5 tracking-wide">
              Recommendations For You
            </h1>
            <p className="text-base md:text-lg text-dark/80">
              <span className="font-bold text-dark">{user?.displayName}</span>, these are all recommendations for your query. Explore suggestions provided by others.
            </p>
          </div>
        </div>
      </div>

      {/* Spacing Between Banner and Content */}
      <div className="mt-8"></div>

      {/* Recommendations Section */}
      <div className="container mx-auto p-4 md:p-6 bg-secondary rounded-lg shadow-md border border-gray-200 mb-20">
        <h2 className="text-xl md:text-2xl font-semibold text-dark mb-4">
          Recommendations <span className="badge bg-primary/30">{recommendations.length}</span>
        </h2>
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-2 py-2 md:px-4 text-left font-semibold text-gray-700">
                  Image
                </th>
                <th className="px-2 py-2 md:px-4 text-left font-semibold text-gray-700">
                  Product Name
                </th>
                <th className="px-2 py-2 md:px-4 text-left font-semibold text-gray-700">
                  Date
                </th>
                <th className="px-2 py-2 md:px-4 text-left font-semibold text-gray-700">
                  Recommendation Title
                </th>
              </tr>
            </thead>
            <tbody>
              {recommendations.map((recommendation) => (
                <tr
                  key={recommendation.id}
                  className="border-b hover:bg-gray-100 transition"
                >
                  <td className="px-2 py-2 md:px-4">
                    <img
                      src={recommendation.productImage}
                      alt={recommendation.recommendationProductName}
                      className="w-12 h-12 md:w-16 md:h-16 object-cover rounded-md"
                    />
                  </td>
                  <td className="px-2 py-2 md:px-4 text-sm md:text-base">
                    {recommendation.recommendationProductName}
                  </td>
                  <td className="px-2 py-2 md:px-4 text-sm md:text-base">
                    {recommendation.date}
                  </td>
                  <td className="px-2 py-2 md:px-4 text-sm md:text-base">
                    {recommendation.recommendationTitle}
                  </td>
                </tr>
              ))}
              {recommendations.length === 0 && !loading && (
                <tr>
                  <td
                    colSpan="4"
                    className="text-center py-4 text-gray-600 text-sm"
                  >
                    No recommendations found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RecommendationForMe;
