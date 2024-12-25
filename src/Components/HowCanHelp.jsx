
import { ThumbsUp } from 'lucide-react';

const HowCanHelp = () => {
    return (
        <div className='bg-secondary'>
             <div className=" bg-secondary w-11/12 mx-auto">
      <div className="max-w-7xl mx-auto  px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="flex items-center flex-col md:flex-row gap-8 p-8">
            <div className="bg-custom-light rounded-full p-4">
              <ThumbsUp className="w-12 h-12 text-primary" />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-custom-dark mb-2">
                Just Take A Few Minutes And Find Out
              </h1>
              <h2 className="text-2xl font-bold text-primary mb-4">
                How You Can Help Someone Today!!
              </h2>
              <p className="text-gray-600">
                By taking a few minutes to answer a few questions, you can help others.
              </p>
            </div>
            <button className="bg-primary hover:bg-primary/20 text-white font-semibold px-6 py-3 rounded-full transition-colors duration-200">
              Sign Up Now
            </button>
          </div>
        </div>
      </div>
    </div>

            
        </div>
    );
};

export default HowCanHelp;