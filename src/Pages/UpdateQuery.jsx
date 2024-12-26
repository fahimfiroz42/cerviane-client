import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthPovider/AuthPovider";
import { format } from "date-fns";
import Lottie from "lottie-react";
import ques from '../assets/ques.json';
import Swal from "sweetalert2";
import useAxios from "../Hooks/useAxios";
import { useParams } from "react-router-dom";
import useTitle from "../Hooks/useTitle";

const UpdateQuery = () => {
    useTitle('Update Query')
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const axiosSecurity = useAxios();
  const [myQueries, setMyQueries] = useState({});

  useEffect(() => {
    const fetchdata = async () => {
      const { data } = await axiosSecurity.get(`/all-querie/${id}`);
      setMyQueries(data);
    };

    fetchdata();
  }, [id]);

  const [formData, setFormData] = useState({
    productName: '',
    productBrand: '',
    productImageURL: '',
    queryTitle: '',
    boycottingReason: '',
    querier: {
      name: user?.displayName,
      email: user?.email,
      photo: user?.photoURL
    },
    recommendationCount: '',
    date: format(new Date(), 'dd-MM-yyyy'),
    time: format(new Date(), 'HH:mm:ss'),
  });

  useEffect(() => {
    if (myQueries) {
      setFormData((prev) => ({
        ...prev,
        productName: myQueries.productName || "",
        productBrand: myQueries.productBrand || "",
        productImageURL: myQueries.productImageURL || "",
        queryTitle: myQueries.queryTitle || "",
        boycottingReason: myQueries.boycottingReason || "",
        recommendationCount: myQueries.recommendationCount || 0,
        date: myQueries.date || format(new Date(), 'dd-MM-yyyy'),
        time: myQueries.time || format(new Date(), 'HH:mm:ss'),
      }));
    }
  }, [myQueries]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axiosSecurity.patch(`/update-query/${id}`, formData)
      .then(res => {
        if (res.data.modifiedCount > 0) {
          Swal.fire({
            title: 'Query Updated Successfully',
            text: 'Your Query has been updated successfully',
            icon: 'success',
            confirmButtonText: 'OK'
          });
        }
      });
  };

  return (
    <div>
      {/* Stylish Banner */}
      <div className="relative hero bg-gradient-to-r from-primary via-light to-secondary rounded-lg mb-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(https://i.ibb.co/ZKfQr8m/Free-Vector-abstract-colorful-banners-collection.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.3,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark opacity-60"></div>
        <div className="relative z-10 hero-content text-center py-10 md:py-20 px-4">
          <div className="max-w-xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-extrabold text-dark mb-5 tracking-wide">
              Update Your Query
            </h1>
            <p className="text-base md:text-lg text-dark/70">
              Modify your query details, update the product information, and explain your reasons clearly.
            </p>
            <Lottie animationData={ques} loop={true} className="w-28 h-28 mx-auto" />
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-lg mx-auto p-6 bg-secondary shadow-md rounded-md mb-20">
        <h1 className="text-2xl font-bold mb-6 text-center text-dark">Update Query</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-dark font-medium mb-2" htmlFor="productName">
              Product Name
            </label>
            <input
              type="text"
              id="productName"
              name="productName"
              value={formData.productName}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-light rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter product name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-dark font-medium mb-2" htmlFor="productBrand">
              Product Brand
            </label>
            <input
              type="text"
              id="productBrand"
              name="productBrand"
              value={formData.productBrand}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-light rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter product brand"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-dark font-medium mb-2" htmlFor="productImageURL">
              Product Image URL
            </label>
            <input
              type="url"
              id="productImageURL"
              name="productImageURL"
              value={formData.productImageURL}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-light rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter product image URL"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-dark font-medium mb-2" htmlFor="queryTitle">
              Query Title
            </label>
            <input
              type="text"
              id="queryTitle"
              name="queryTitle"
              value={formData.queryTitle}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-light rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Enter query title"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-dark font-medium mb-2" htmlFor="boycottingReason">
              Boycotting Reason Details
            </label>
            <textarea
              id="boycottingReason"
              name="boycottingReason"
              value={formData.boycottingReason}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-light rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Explain the reason for boycotting this product"
              rows="4"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-secondary py-2 px-4 rounded-md hover:bg-dark focus:outline-none focus:ring-2 focus:ring-light"
          >
            Update Query
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateQuery;
