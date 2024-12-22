import RecommandationComment from "../Components/RecommandationComment";
import RecommendationForm from "../Components/Recommendationform";


const QuerieDetails = () => {
    const {
        boycottingReason,
        date,
        productBrand,
        productImageURL,
        productName,
        queryTitle,
        recommendationCount,
        time,
      } = data;
    
      return (
       <div className="">

<div className=" m my-10 w-11/12 mx-auto bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
          <img
            src={productImageURL}
            alt={productName}
            className="w-full h-96 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800">{queryTitle}</h2>
            <p className="text-gray-600 mt-1">{boycottingReason}</p>
            <div className="mt-4">
              <p>
                <span className="font-semibold text-gray-700">Product Name: </span>
                {productName}
              </p>
              <p>
                <span className="font-semibold text-gray-700">Brand: </span>
                {productBrand}
              </p>
              <p>
                <span className="font-semibold text-gray-700">Recommendation Count: </span>
                {recommendationCount}
              </p>
            </div>
            <div className="mt-4 text-sm text-gray-500">
              <p>
                <span className="font-semibold">Date: </span>{date}
              </p>
              <p>
                <span className="font-semibold">Time: </span>{time}
              </p>
            </div>
          </div>
</div>

<div>
    <RecommendationForm/>
</div>

<div>
    <RecommandationComment/>
</div>
       </div>
      );
};

export default QuerieDetails;

const data = {
    boycottingReason: "Dolorum deleniti har",
    date: "22-12-2024",
    productBrand: "Dolorum pariatur Do",
    productImageURL: "https://i.ibb.co.com/8546Bb4/6-Amazing-Pieces-of-High-Visibility-Cycling-Gear.jpg",
    productName: "Lysandra Crawford",
    queryTitle: "Ea velit assumenda",
    recommendationCount: 0,
    time: "12:37:38",
  };
