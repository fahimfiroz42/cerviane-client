

const CommentCard = () => {
    const recommendation = {
        imageUrl:
          "https://i.ibb.co.com/8546Bb4/6-Amazing-Pieces-of-High-Visibility-Cycling-Gear.jpg", // Replace with actual image URL
        productName: "Ergonomic Steel Chair",
        date: "22-12-2024",
        reason:
          "This chair has excellent lumbar support and a sleek design, making it perfect for long hours of work.",
        recommendationTitle: "Best Chair for Office Use",
      };
  const { imageUrl, productName, date, reason, recommendationTitle } =
    recommendation;

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md border border-gray-200 p-4 space-y-4">
      {/* Image */}
      <div className="flex items-center space-x-4">
        <img
          src={imageUrl}
          alt={productName}
          className="w-16 h-16 object-cover rounded-md border border-gray-300"
        />
        <div>
          <h2 className="text-lg font-semibold text-dark">
            {productName}
          </h2>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>

      {/* Title and Reason */}
      <div>
        <h3 className="text-md font-medium text-primary">
          {recommendationTitle}
        </h3>
        <p className="text-sm text-gray-600 mt-2">{reason}</p>
      </div>
    </div>
  );
};

export default CommentCard;
