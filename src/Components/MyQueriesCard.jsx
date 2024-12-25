
import axios from "axios";
import { FaEye, FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyQueriesCard=({query,setMyQueries,myQueries})=> {

    const {_id,productName,productBrand,productImageURL,queryTitle,boycottingReason}=query ||{};

    
    const handleDelete = async (id) => {
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
              

            axios.delete(`https://cervinae-server.vercel.app/delete-query/${id}`)
            .then(res=>{if(res.data.deletedCount>0){
                Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });

              const filteredQueries = myQueries.filter((query) => query._id !== id);      
              setMyQueries(filteredQueries);
              

            }})
            }
          });

       


    }


  return (
    <div className="w-full  p-6  shadow-inner  rounded-lg  border-light hover:shadow-xl transition-shadow">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-dark mb-1">{productName}</h2>
        <p className="text-md text-gray-700">Brand: <span className="text-dark font-medium badge bg-primary/20">{productBrand}</span></p>
      </div>

      {productImageURL && (
        <div className="mb-4">
          <img
            src={productImageURL}
            alt={productName}
            className="w-full h-56 object-contain rounded-lg"
          />
        </div>
      )}

      <div className="mb-4">
        <p className="text-md text-gray-800 font-semibold mb-2">{queryTitle}</p>
        <p className="text-sm text-gray-600">Reason:{boycottingReason.slice(0, 30)}....</p>
      </div>

      <div className="flex justify-around items-center mt-4 space-x-3">
        <Link to={`/queryDetails/${_id}`}>
        
        <button 
          className="flex items-center gap-2 bg-primary text-secondary px-4 py-2 rounded-md hover:bg-dark focus:outline-none focus:ring-2 focus:ring-light transition-colors"
        >
          <FaEye /> Details
        </button>
        
        </Link>

         <Link to={`/updateQuery/${_id}`}>
         <button
          className="flex items-center gap-2 bg-light text-dark px-4 py-2 rounded-md hover:bg-primary hover:text-secondary focus:outline-none focus:ring-2 focus:ring-light transition-colors"
        >
          <FaEdit /> Update
        </button>
         
         </Link>

        <button  onClick={() => handleDelete(_id)}
          className="flex items-center gap-2 bg-red-500 text-secondary px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-light transition-colors"
        >
          <FaTrashAlt /> Delete
        </button>
      </div>
    </div>
  );
}

export default MyQueriesCard;
