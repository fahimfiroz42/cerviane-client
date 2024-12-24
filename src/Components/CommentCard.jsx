

const CommentCard = ({recommendation}) => {

    const {productImage,recommendationProductName, recommendationTitle,recommendationReason,date}=recommendation||{}
   

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md border border-gray-200 p-4 space-y-4">
      {/* Image */}
      <div className="flex items-center space-x-4">
        <img
          src={productImage}
          alt={recommendationProductName}
          className="w-16 h-16 object-cover rounded-md border border-gray-300"
        />
        <div>
          <h2 className="text-lg font-semibold text-dark">
            {recommendationProductName}
          </h2>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>

      {/* Title and Reason */}
      <div>
        <h3 className="text-md font-medium text-primary">
          {recommendationTitle}
        </h3>
        <p className="text-sm text-gray-600 mt-2">{recommendationReason}</p>
      </div>
    </div>
  );
};

export default CommentCard;
