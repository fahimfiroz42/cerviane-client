import React, { useContext, useState } from "react";
import { AuthContext } from "../AuthPovider/AuthPovider";
import { format } from "date-fns";
import axios from "axios";
import Swal from "sweetalert2";

const RecommendationForm = ({query} ) => {

    const {user}=useContext(AuthContext)
    const {
        _id,
        productName,
        queryTitle,
        querier
      } = query ||{}
 


  const handleSubmit = (e) => {
    e.preventDefault();
   const form = e.target;
    const recommendationTitle = form.recommendationTitle.value;
    const recommendationProductName = form.recommendationProductName.value;
    const productImage = form.productImage.value;
    const recommendationReason = form.recommendationReason.value;
   
    const formData = {
      recommendationTitle,
      recommendationProductName,
      productImage,
      recommendationReason,
      queryId:_id,
      queryTitle:queryTitle,
    productName:productName,
    querierEmail:querier?.email,
    querierName:querier?.name,
    RecommenderEmail:user?.email,
    RecommenderName:user?.displayName,
    date:format(new Date(), 'dd-MM-yyyy')

    }


    try {
        axios.post('http://localhost:5000/add-recommendation', formData)
        .then(res=>{
            if(res.data.insertedId){
                Swal.fire({
                    title: 'Recommendation Added Successfully',
                    text: 'Your Recommendation has been added successfully',
                    icon: 'success',
                    confirmButtonText: 'ok'
                  })
                }
            }
    )
    } catch (error) {
        console.log(error);

        
    }
    
  };

  return (
 <>
 
 <div className="text-center my-10">
    <h1 className="text-3xl font-bold text-dark uppercase">ADD <spa className="text-primary">Recommendation</spa></h1>
    <p>Add your Recommendation here about the product</p>
    <hr className="w-1/12 mx-auto border-2 border-primary" />
    </div>
    <div className="w-11/12 mb-20 mx-auto mt-10 p-6 bg-secondary rounded-lg shadow-md border border-light">
      <h2 className="text-xl font-semibold text-dark mb-4">
        Add a Recommendation
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Recommendation Title */}
        <div>
          <label
            htmlFor="recommendationTitle"
            className="block text-sm font-medium text-dark"
          >
            Recommendation Title
          </label>
          <input
            type="text"
            id="recommendationTitle"
            name="recommendationTitle"
           
            placeholder="Enter recommendation title"
            className="mt-1 block w-full border-light rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
          />
        </div>

        {/* Recommended Product Name */}
        <div>
          <label
            htmlFor="productName"
            className="block text-sm font-medium text-dark"
          >
            Recommended Product Name
          </label>
          <input
            type="text"
            id="recommendationProductName"
            name="recommendationProductName"
            
            placeholder="Enter product name"
            className="mt-1 block w-full border-light rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
          />
        </div>

        {/* Recommended Product Image */}
        <div>
          <label
            htmlFor="productImage"
            className="block text-sm font-medium text-dark"
          >
            Recommended Product Image URL
          </label>
          <input
            type="url"
            id="productImage"
            name="productImage"
            
            placeholder="Enter product image URL"
            className="mt-1 block w-full border-light rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
          />
        </div>

        {/* Recommendation Reason */}
        <div>
          <label
            htmlFor="recommendationReason"
            className="block text-sm font-medium text-dark"
          >
            Recommendation Reason
          </label>
          <textarea
            id="recommendationReason"
            name="recommendationReason"
       
            placeholder="Enter the reason for your recommendation"
            className="mt-1 block w-full border-light rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-primary text-secondary py-2 px-4 rounded-md shadow-sm hover:bg-dark focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          Add Recommendation
        </button>
      </form>
    </div>
 </>

    
  );
};

export default RecommendationForm;
