
import { FaEye, FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";


const MyQueriesCard=( {query})=> {

    const {_id,productName,productBrand,productImageURL,queryTitle,boycottingReason}=query ||{};
  return (
    <div className="w-full  p-6 bg-secondary shadow-lg rounded-lg border border-light hover:shadow-xl transition-shadow">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-dark mb-1">{productName}</h2>
        <p className="text-md text-gray-700">Brand: <span className="text-dark font-medium">{productBrand}</span></p>
      </div>

      {productImageURL && (
        <div className="mb-4">
          <img
            src={productImageURL}
            alt={productName}
            className="w-full h-56 object-cover rounded-lg shadow-sm"
          />
        </div>
      )}

      <div className="mb-4">
        <p className="text-md text-gray-800 font-semibold mb-2">{queryTitle}</p>
        <p className="text-sm text-gray-600">Reason:{boycottingReason}</p>
      </div>

      <div className="flex justify-around items-center mt-4 space-x-3">
        <Link to={`/queryDetails/${_id}`}>
        
        <button 
          className="flex items-center gap-2 bg-primary text-secondary px-4 py-2 rounded-md hover:bg-dark focus:outline-none focus:ring-2 focus:ring-light transition-colors"
        >
          <FaEye /> Details
        </button>
        
        </Link>

        <button
          className="flex items-center gap-2 bg-light text-dark px-4 py-2 rounded-md hover:bg-primary hover:text-secondary focus:outline-none focus:ring-2 focus:ring-light transition-colors"
        >
          <FaEdit /> Update
        </button>

        <button
          className="flex items-center gap-2 bg-red-500 text-secondary px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-light transition-colors"
        >
          <FaTrashAlt /> Delete
        </button>
      </div>
    </div>
  );
}

export default MyQueriesCard;
