import { Star, Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductPromotion = () => {
    return (
        <div className="min-h-screen bg-[rgb(248,250,255)] py-16">
      <div className="w-11/12 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-[#05264E] mb-6">
            Transform Your Workflow
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how our premium solution can revolutionize your productivity
            and streamline your daily operations.
          </p>
        </div>

        {/* Product Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden ">
          <div className="flex flex-col md:flex-row">
            {/* Product Image */}
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
                alt="Product workspace"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="md:w-1/2 p-8">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">4.9/5 (2.5k+ reviews)</span>
              </div>

              <h2 className="text-3xl font-bold text-[#05264E] mb-4">
                Premium Package
              </h2>

              <div className="mb-6">
                <div className="text-3xl font-bold text-[rgb(60,101,245)] mb-2">
                  $99<span className="text-lg font-normal">/month</span>
                </div>
                <p className="text-gray-600">Cancel anytime. Includes all features.</p>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {['Advanced Analytics', 'Priority Support', 'Custom Integration', 'Unlimited Storage'].map((feature) => (
                  <div key={feature} className="flex items-center">
                    <Check className="w-5 h-5 text-[rgb(60,101,245)] mr-3" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <Link to="/"><button className="w-full bg-[rgb(60,101,245)] text-white py-3 px-6 rounded-lg font-semibold 
                hover:bg-[rgb(45,85,220)] transition-colors duration-200 flex items-center justify-center">
                Get Started Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>

              </Link>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['30-Day Trial', 'No Credit Card', '24/7 Support', 'Money Back'].map((item) => (
              <div key={item} className="bg-primary/10 p-4 rounded-lg">
                <p className="font-semibold text-primary text-xl">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    );
};

export default ProductPromotion;