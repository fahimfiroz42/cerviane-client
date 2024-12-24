

import { FaThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AllQueriesCard = ({query}) => {

  const { 
    _id,
    productName, 
    productBrand, 
    productImageURL, 
    queryTitle, 
    boycottingReason, 
    querier,
    date,
    recommendationCount 
  } = query || {};
console.log(productImageURL);
  return (
    <div className=" bg-white rounded-lg shadow-md border border-gray-200 p-4 space-y-4">
      {/* Full-Width Product Image */}
      <div className="w-full h-60">
       {productImageURL &&
        <img 
        src={productImageURL} 
        alt={productName} 
        className="w-full h-full object-contain rounded-md hover:scale-110 transition-transform duration-300" 
      />
       
       }
      </div>

      {/* Product Info */}
      
        <div className='flex items-center justify-between '>
          <h2 className="text-xl font-semibold text-dark">{productName}</h2>
          <p className="text-sm text-gray-500 badge bg-primary/20">{productBrand}</p>
        </div>
      

      {/* Query Title */}
      <div>
        <h3 className="text-md font-semibold text-primary">{queryTitle}</h3>
      </div>

      {/* Boycotting Reason */}
      <div>
        <p className="text-sm text-gray-600">{boycottingReason}</p>
      </div>

      {/* User Info */}
      <div className="flex items-center space-x-4">
        <img 
          src={querier?.photo} 
          alt={querier?.name} 
          className="w-12 h-12 object-cover rounded-full border border-gray-300 " 
        />
        <div>
          <p className="text-sm font-semibold text-dark">{querier?.name}</p>
          <p className="text-xs text-gray-500">{date}  </p>
        </div>
      </div>

      {/* Recommendation Count & Recommend Button */}
      <div className="flex justify-between items-center">
        <p className="text-sm text-gray-500">Recommendations: <span className='badge bg-primary/20 font-bold'>{recommendationCount}</span></p>
       <Link to={`/queryDetails/${_id}`}>
       <button className="bg-primary text-white py-2 px-4 rounded-md flex items-center hover:bg-dark">
          <FaThumbsUp className="mr-2" /> Recommend
        </button>
       
       </Link>
      </div>
    </div>
  );
};

export default AllQueriesCard;