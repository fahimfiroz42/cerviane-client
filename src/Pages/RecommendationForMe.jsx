import { useState } from "react";


const RecommendationForMe = () => {
      const [recommendations, setRecommendations] = useState([
    {
      id: 1,
      imageUrl: "https://via.placeholder.com/150",
      productName: "Ergonomic Steel Chair",
      date: "22-12-2024",
      reason:
        "This chair has excellent lumbar support and a sleek design, making it perfect for long hours of work.",
      recommendationTitle: "Best Chair for Office Use",
    },
    {
      id: 2,
      imageUrl: "https://via.placeholder.com/150",
      productName: "Wireless Headphones",
      date: "20-12-2024",
      reason:
        "These headphones provide superb noise cancellation and a comfortable fit.",
      recommendationTitle: "Top Noise-Cancelling Headphones",
    },
  ]);

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
                  src={recommendation.imageUrl}
                  alt={recommendation.productName}
                  className="w-16 h-16 object-cover rounded-md"
                />
              </td>
              <td className="px-4 py-2">{recommendation.productName}</td>
              <td className="px-4 py-2">{recommendation.date}</td>
              <td className="px-4 py-2">{recommendation.recommendationTitle}</td>
              <td className="px-4 py-2">
                <button
                  onClick={() => handleDelete(recommendation.id)}
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