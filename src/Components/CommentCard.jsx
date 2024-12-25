import { MessageCircle, ThumbsUp, Calendar } from 'lucide-react';

const CommentCard = ({recommendation}) => {

    const {productImage,RecommenderName,recommendationProductName, recommendationTitle,recommendationReason,date}=recommendation||{}
   

  return (


    <div className="w-full mx-auto py-6">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <div className="flex items-start space-x-4">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-primary" />
                
              </div>
            </div>

            <div className="flex-1">
              {/* Header */}
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">{RecommenderName}</h3>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{date}</span>
                </div>
              </div>

              {/* Content */}
              <div className="mt-2">
                <img src={productImage} alt=""  className='w-32 h-32'/>
                <h4 className="text-xl font-medium text-gray-900 mb-2">
                  {recommendationTitle}
                </h4>
                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                  <p className="text-blue-800 font-medium">
                    Recommended: {recommendationProductName}
                  </p>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  {recommendationReason}
                </p>
              </div>

              {/* Actions */}
              <div className="mt-4 flex items-center space-x-4">
                <button className="flex items-center text-gray-500 hover:text-blue-600 transition-colors">
                  <ThumbsUp className="w-5 h-5 mr-1" />
                  <span>Helpful</span>
                </button>
                <button className="text-gray-500 hover:text-blue-600 transition-colors">
                  Reply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
};

export default CommentCard;
