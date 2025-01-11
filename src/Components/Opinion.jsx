import {Link} from 'react-router-dom'

const OpinionSection = () => {
  return (
   <div className=" bg-secondary">
     <div className="relative w-11/12 mx-auto  bg-secondary py-12">
      <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2  gap-8 items-center">
        {/* Text Content */}
        <div className="text-center lg:text-left">
          <div className="flex justify-center lg:justify-start mb-4">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <img
                src="https://i.ibb.co.com/fSk7cKb/social-media.png"
                alt="Community Icon"
                className="w-8 h-8"
              />
            </div>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-dark">
            Opinions. We All Have Them, But <br />
            <span className="text-primary">They Are Not Always Valued</span>
          </h2>
          <p className="text-dark mt-4">
            Every product has a story, and every buyer has an opinion. Yet,
            these opinions often go unheard or undervalued. This is your chance
            to make informed decisions based on what others think.
          </p>
          <p className="text-dark mt-4">
            Dive into our community insights to discover experiences,
            perspectives, and honest reviews. Your opinion matters, and it can
            help others make better choices.
          </p>
          <Link to={"/allQueries"}><button className="mt-6 px-6 py-3 bg-gradient-to-r from-primary to-light text-white rounded-lg font-medium hover:opacity-90 transition">
            View Reviews
          </button>

          </Link>
        </div>

        {/* Image Content */}
        <div className="relative">
          {/* Main Smiley */}
          <img
            src="https://i.ibb.co.com/D9vyV5g/happy-face.png"
            alt="Main Smiley"
            className="w-64 h-64 mx-auto lg:mx-0 object-cover z-10 relative"
          />

          {/* Other Icons */}
          <img
            src="https://i.ibb.co.com/D9vyV5g/happy-face.png"
            alt="Small Smiley"
            className="absolute w-20 h-20 object-cover top-0  animate-bounce"
          />
          <img
            src="https://i.ibb.co.com/31L5W1B/cool.png"
            alt="Thumbs Up"
            className="absolute w-24 h-24 object-cover top-12 right-20"
          />
          <img
            src="https://i.ibb.co.com/QrkYp15/emoji.png"
            alt="Checklist"
            className="absolute w-20 h-20 object-cover  left-12"
          />
          <img
            src="https://i.ibb.co.com/YTjYKt0/love.png"
            alt="Stars"
            className="absolute w-30 h-20 object-cover bottom-0 right-16 animate-pulse"
          />
        </div>
      </div>
    </div>

   </div>
  );
};

export default OpinionSection;
