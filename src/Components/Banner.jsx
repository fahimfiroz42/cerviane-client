import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";

import { Link } from "react-router-dom";
import { Autoplay, EffectFade } from "swiper/modules";

const Banner = () => {
  return (
    <>
      <section className="flex justify-center bg-secondary text-white w-full relative pt-10 pb-12">
        <div className="w-full px-4 sm:px-6 md:px-8 flex justify-center">
          <Swiper
            loop={true}
            slidesPerView={1}
            effect="fade"
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[EffectFade, Autoplay]}
            className="w-full sliderWidth rounded-2xl cursor-grabbing"
          >
            {SliderData.map((slider, index) => (
              <SwiperSlide
                key={index}
                className="w-full bg-cover bg-center bg-no-repeat relative"
                style={{
                  backgroundImage: `url(${slider.img})`,
                }}
              >
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 rounded-2xl"></div>
                <div className="relative w-full h-full flex items-center justify-center p-10 md:p-12 lg:p-16 text-center">
                  <div className="space-y-4 sm:space-y-6 max-w-2xl">
                    <h2 className="animate__animated animate__fadeInDown text-xl sm:text-2xl md:text-3xl lg:text-5xl font-extrabold text-white">
                      {slider.title}
                    </h2>
                    <p className="animate__animated animate__fadeInRight text-sm sm:text-base md:text-lg lg:text-xl text-white/90">
                      {slider.description}
                    </p>
                    <Link to={'/'}>
                      <button className="animate__animated animate__fadeInUp px-6 py-3 text-white rounded-lg mt-4 sm:mt-6 font-medium transition-all duration-300 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-purple-600 hover:to-indigo-500">
                        {slider.buttonText}
                      </button>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Banner;

const SliderData = [
  {
    id: 1,
    title: "WELCOME TO PRODASK",
    img: "https://i.ibb.co/r643XqZ/pexels-jibarofoto-15362118.jpg",
    description:
      "Ask questions and get real answers from real people. Whether you’re looking for crossword answers, practical advice or you’ve just come for a chat, get answers to your questions. To get started all you need to do is register.",
    buttonText: "Get Recommendations",
  },
  {
    id: 2,
    title: "Discover Better Alternatives",
    img: "https://i.ibb.co/hMrkvSX/pexels-shvetsa-4316723-1.jpg",
    description:
      "Looking for something better? Compare top-rated products and find alternatives that offer the quality and features you need.",
    buttonText: "Discover Alternatives",
  },
  {
    id: 3,
    title: "Make Informed Decisions",
    img: "https://i.ibb.co/JzGwQjg/pexels-alex-green-5699479.jpg",
    description:
      "Our platform brings you trusted reviews and personalized recommendations to help you make the right choice for your needs.",
    buttonText: "Learn More",
  },
  {
    id: 4,
    title: "Get Tailored Suggestions",
    img: "https://i.ibb.co/n6tQLbn/pexels-mastercowley-920036.jpg",
    description:
      "Unsure about the best product for you? Let us provide tailored suggestions based on your preferences and requirements.",
    buttonText: "Start Now",
  },
  {
    id: 5,
    title: "Explore Top-Rated Products",
    img: "https://i.ibb.co/NWD0PSx/pexels-jibarofoto-2833037.jpg",
    description:
      "Browse our list of top-rated products, backed by user reviews and expert opinions. Find what works best for you.",
    buttonText: "View Top Picks",
  },
];
