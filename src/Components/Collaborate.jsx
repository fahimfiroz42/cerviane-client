import { Link } from "react-router-dom";
import { AuthContext } from "../AuthPovider/AuthPovider";
import { useContext } from "react";


const Collaborate = () => {
  const {user}=useContext(AuthContext)
    return (
        <div className="min-h-screen bg-secondary p-8 ">
        <div className="w-11/12 mx-auto">
        <div className=" mx-auto ">
          {/* Header */}
          <div className="flex items-center gap-2 mb-4">
            <img src="https://i.ibb.co.com/P6H1zNF/comments.png" alt="Logo" className="w-12 h-12" />
          </div>
  
          {/* Hero Section */}
          <div className="relative flex flex-col md:flex-row items-center justify-between mb-20">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-4xl font-bold mb-4 text-dark">
                Leave Your Opinion About The Products You Use,
                <span className="block text-primary">You Collaborate, We Share</span>
              </h2>
              <p className="text-gray-600 mb-8">
                Share your valuable insights with the community.Make informed decisions based on what others think.And Make a Difference with Your Opinion. 
              </p>
            {
              user?.email?<>
              <Link to={'/'}><button className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all">
                Expore Now
              </button>
              </Link> 
              </>:<>
               <Link to="/login"><button className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all">
                I Want To Sign Up
              </button>
              </Link>
              </>
            }

             
            </div>
            <div className="md:w-1/2 relative">
              <div className="relative">
                <img src="https://i.ibb.co.com/10ZsSJh/Blue-Eyes-Brown-Hair-Medium-length.jpg" alt="Happy customer" className="rounded-full w-96 h-96 object-cover" />
                <div className="absolute -top-4 -left-4">
                  <img src="https://i.ibb.co.com/3v1RfdZ/Dr-Emily-Roberts.jpg" alt="Customer" className="w-20 h-20 rounded-full border-4 border-white" />
                </div>
                <div className="absolute -bottom-4 -right-4">
                  <img src="https://i.ibb.co.com/c1S0dZb/Jermain-Kerman-Corporate.jpg" alt="Customer" className="w-20 h-20 rounded-full border-4 border-white object-cover" />
                </div>
              </div>
            </div>
          </div>
  
          {/* Gift Section */}
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 relative mb-10 md:mb-0">
              <div className="relative">
                <img src="https://i.ibb.co.com/tQZHgtq/Free-Photo-Smiling-man-presenting-little-gift-box-to-woman.jpg" alt="Person with gifts" className="rounded-[30%] w-96 h-96 object-cover" />
                <div className="absolute -bottom-4 -right-4">
                  <img src="https://i.ibb.co.com/rbVq19H/Download-premium-image-of-Presents-holding-gift-hand-by-Aum-about-gift-christmas-red-box-christmas-h.jpg" alt="Review" className="w-32 h-32 rounded-xl border-4 border-white" />
                </div>
                <div className="absolute top-4 -right-4">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-4xl font-bold mb-5 text-dark">
                Giving Someone A Gift Has Never Been Easier,
                <span className="block text-primary">Join Our Community</span>
              </h2>
              <p className="text-gray-600 mb-8">
                You can now send gifts to your loved ones and make them happy.Exciting gifts are waiting for you.So be quick and grab them.
              </p>
              <Link to={'/allQueries'}><button className="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all">
                View Reviews
              </button>
              </Link>
            </div>
          </div>
        </div>
        </div>
      </div>
    );
};

export default Collaborate;