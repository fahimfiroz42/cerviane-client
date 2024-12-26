import axios from "axios";
import { FaEye, FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyQueriesCard = ({ query, setMyQueries, myQueries }) => {
  const { _id, productName, productBrand, productImageURL, queryTitle, boycottingReason } = query || {};

  const handleDelete = async (id) => {
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
          .delete(`https://cervinae-server.vercel.app/delete-query/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              const filteredQueries = myQueries.filter((query) => query._id !== id);
              setMyQueries(filteredQueries);
            }
          });
      }
    });
  };

  return (
    <div className="w-full p-6 shadow-inner rounded-lg border border-light hover:shadow-xl transition-shadow bg-white">
      <div className="mb-4">
        <h2 className="text-xl md:text-2xl font-bold text-dark mb-1">{productName}</h2>
        <p className="text-sm md:text-md text-gray-700">
          Brand:{" "}
          <span className="text-dark font-medium badge bg-primary/20 px-2 py-1 rounded">
            {productBrand}
          </span>
        </p>
      </div>

      {productImageURL && (
        <div className="mb-4">
          <img
            src={productImageURL}
            alt={productName}
            className="w-full h-40 sm:h-56 object-contain rounded-lg"
          />
        </div>
      )}

      <div className="mb-4">
        <p className="text-sm md:text-md text-gray-800 font-semibold mb-2">{queryTitle}</p>
        <p className="text-xs md:text-sm text-gray-600">
          Reason: {boycottingReason.slice(0, 30)}....
        </p>
      </div>

      <div className="flex flex-wrap justify-between gap-3 items-center mt-4">
        <Link to={`/queryDetails/${_id}`}>
          <button
            className="flex justify-center items-center btn bg-primary text-secondary rounded-xl hover:bg-dark focus:outline-none focus:ring-2 focus:ring-light transition-colors"
            title="Details"
          >
            <FaEye /> Details
          </button>
        </Link>

        <Link to={`/updateQuery/${_id}`}>
          <button
            className="flex justify-center items-center btn bg-light text-dark rounded-xl hover:bg-primary hover:text-secondary focus:outline-none focus:ring-2  focus:ring-light transition-colors"
           
          >
            <FaEdit />Update
          </button>
        </Link>

        <button
          onClick={() => handleDelete(_id)}
          className="flex justify-center items-center w-10 h-10 bg-red-500 text-secondary rounded-full hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-light transition-colors"
          title="Delete"
        >
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default MyQueriesCard;
