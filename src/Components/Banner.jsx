

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';

import { Link } from 'react-router-dom';
import { Autoplay, EffectFade } from 'swiper/modules';

const Banner = () => {
return (
      <>
        <section className="  flex m justify-center bg-secondary dark:bg-gray-900 text-white w-full relative pt-10 pb-12 "> 
            <div className="w-full  px-4 sm:px-6 md:px-8 flex justify-center">
                <Swiper
                    loop={true}
                    slidesPerView={1}
                    effect='fade'
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false, 
                      }}
                      modules={[EffectFade, Autoplay]}  
                    className="w-full sliderWidth   rounded-2xl cursor-grabbing"
                >
                    {
                        SliderData.map((slider, index) => (
                            <SwiperSlide
                                key={index}
                                className="w-full bg-cover bg-center bg-no-repeat"
                                style={{
                                    backgroundImage:
                                        `url(${slider.img})`,
                                }}
                            >
                                <div className="w-full h-full bg-black/30 p-10 md:p-12 lg:p-16 space-y-4 sm:space-y-6 flex items-center">
                                    <div className="w-full md:w-8/12 lg:w-7/12 space-y-4 sm:space-y-5">
                                        <h2 className="animate__animated animate__fadeInDown text-xl sm:text-2xl md:text-3xl lg:text-6xl font-semibold">
                                            {slider.title}
                                        </h2>
                                        <p className="animate__animated animate__fadeInRight text-sm sm:text-base md:text-lg lg:text-xl">
                                           {slider.description}
                                        </p>
                                        <Link to={slider.link} >
                                            <button className="animate__animated animate__fadeInUp px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-primary text-black rounded-lg mt-4 sm:mt-6 font-medium flex items-center gap-2 hover:bg-secondary">
                                                {slider.buttonText}
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>

                        ))
                    }
                </Swiper>
            </div>
        </section>
      </>
    );




}
export default Banner;

const SliderData=[
    {
        "id": 1,
        "title": "Explore Top Sports Gear",
        "img": "https://i.ibb.co.com/fFhhwX8/2147618015.jpg",
        "description": "Discover a wide range of high-quality sports equipment for every athlete. From beginners to professionals, we have the gear you need to perform your best.",
        "buttonText": "Shop Now"
    },
    {
        "id": 2,
        "title": "Upgrade Your Equipment",
        "img": "https://i.ibb.co.com/Bg2jPzd/an-illustration-of-various-sports-equipment-there-q-KX6-Qc-Sp-RPiin-DDn8oeplg-BN3-De-Ss-ZSISI67-Lkhk.jpg",
        "description": "Level up your game with the latest and most durable sports equipment. Get expert recommendations to find the perfect fit for your needs.",
        "buttonText": "Explore More"
    },
    {
        "id": 3,
        "title": "Stay Safe on the Field",
        "img": "https://i.ibb.co.com/LJxv9Tn/pexels-pixabay-159741.jpg",
        "description": "Protect yourself with top-notch safety gear. Our collection includes helmets, pads, and more to keep you secure while you play.",
        "buttonText": "View Products"
    },
    {
        "id": 4,
        "title": "Enhance Your Training",
        "img": "https://i.ibb.co.com/VgWp9hX/Poster-Design.jpg",
        "description": "Train smarter with specialized equipment designed to improve performance. From agility tools to resistance bands, find everything you need here.",
        "buttonText": "Check It Out"
    },
    {
        "id": 5,
        "title": "Gear Up for the Outdoors",
        "img": "https://i.ibb.co.com/F6CwR8Q/Under-Armour-NFL-Combine.jpg",
        "description": "Get ready for outdoor adventures with our premium selection of camping, hiking, and outdoor sports gear. Built to withstand the toughest conditions.",
        "buttonText": "Shop Outdoor Gear"
    }
  ]
  