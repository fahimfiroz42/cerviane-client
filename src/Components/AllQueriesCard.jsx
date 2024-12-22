
import React from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AllQueriesCard = () => {

    const fakeProductData = {
        productName: "Ergonomic Chair",
        productBrand: "ComfortCo",
        productImageUrl: "https://via.placeholder.com/150",
        queryTitle: "Is there any better chair that provides excellent lumbar support?",
        boycottingReason: "Poor quality materials used, not durable enough for long-term use.",
        userName: "John Doe",
        userProfileImage: "https://via.placeholder.com/50",
        currentDateTime: "2024-12-22 12:30:00",
        recommendationCount: 5
      };
  const { 
    productName, 
    productBrand, 
    productImageUrl, 
    queryTitle, 
    boycottingReason, 
    userName, 
    userProfileImage, 
    currentDateTime, 
    recommendationCount 
  } = fakeProductData;

  return (
    <div className=" bg-white rounded-lg shadow-md border border-gray-200 p-4 space-y-4">
      {/* Full-Width Product Image */}
      <div className="w-full h-60">
        <img 
          src={productImageUrl} 
          alt={productName} 
          className="w-full h-full object-cover rounded-md" 
        />
      </div>

      {/* Product Info */}
      <div className="flex items-center space-x-4">
        <div>
          <h2 className="text-xl font-semibold text-dark">{productName}</h2>
          <p className="text-sm text-gray-500">{productBrand}</p>
        </div>
      </div>

      {/* Query Title */}
      <div>
        <h3 className="text-md font-medium text-primary">{queryTitle}</h3>
      </div>

      {/* Boycotting Reason */}
      <div>
        <p className="text-sm text-gray-600">{boycottingReason}</p>
      </div>

      {/* User Info */}
      <div className="flex items-center space-x-4">
        <img 
          src={userProfileImage} 
          alt={userName} 
          className="w-12 h-12 object-cover rounded-full border border-gray-300" 
        />
        <div>
          <p className="text-sm font-semibold text-dark">{userName}</p>
          <p className="text-xs text-gray-500">{currentDateTime}</p>
        </div>
      </div>

      {/* Recommendation Count & Recommend Button */}
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-500">Recommendations: {recommendationCount}</p>
       <Link to={'/queryDetails'}>
       <button className="bg-primary text-white py-2 px-4 rounded-md flex items-center hover:bg-dark">
          <FaThumbsUp className="mr-2" /> Recommend
        </button>
       
       </Link>
      </div>
    </div>
  );
};

export default AllQueriesCard;