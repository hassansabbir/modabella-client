import { Swiper, SwiperSlide } from "swiper/react";
import "./swiperStyles.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import slider1 from "../../../assets/slider1.jpg";
import slider2 from "../../../assets/slider2.jpg";
import slider3 from "../../../assets/slider3.jpg";
import slider4 from "../../../assets/slider4.jpg";

const Banner = () => {
  return (
    <div className="pt-20">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="relative">
          <img src={slider1} alt="" />
          <div className="absolute top-1/2 md:top-2/4 z-10 left-20">
            <h2 className="md:text-7xl text-left font-description">
              ModaBella
            </h2>
            <p className="md:text-2xl text-left font-description w-6/12">
              Unleash Your Fashion Potential at ModaBella! Explore curated
              collections, find your perfect look, and embrace your unique
              style. Elevate your wardrobe with must-have fashion essentials.
              Shop now and redefine your fashion story!
            </p>
            <div className="text-left space-x-5">
              <button className="btn btn-outline mt-5 px-10">Buy now!</button>
              <button className="btn btn-outline mt-5 px-10">
                Watch Our Blogs
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src={slider2} alt="" />
          <div className="absolute top-1/2 md:top-2/4 z-10 left-20">
            <h2 className="md:text-7xl text-left font-description">
              ModaBella
            </h2>
            <p className="md:text-2xl text-left font-description w-6/12">
              Unleash Your Fashion Potential at ModaBella! Explore curated
              collections, find your perfect look, and embrace your unique
              style. Elevate your wardrobe with must-have fashion essentials.
              Shop now and redefine your fashion story!
            </p>
            <div className="text-left space-x-5">
              <button className="btn btn-outline mt-5 px-10">Buy now!</button>
              <button className="btn btn-outline mt-5 px-10">
                Watch Our Blogs
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src={slider3} alt="" />
          <div className="absolute top-1/2 md:top-2/4 z-10 left-10 lg:left-20">
            <h2 className="md:text-7xl text-xs text-left font-description">
              ModaBella
            </h2>
            <p className="md:text-2xl text-xs text-left font-description w-6/12">
              Unleash Your Fashion Potential at ModaBella! Explore curated
              collections, find your perfect look, and embrace your unique
              style. Elevate your wardrobe with must-have fashion essentials.
              Shop now and redefine your fashion story!
            </p>
            <div className="text-left space-x-5">
              <button className="btn btn-outline mt-5 px-10">Buy now!</button>
              <button className="btn btn-outline mt-5 px-10">
                Watch Our Blogs
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img src={slider4} alt="" />
          <div className="absolute top-1/2 md:top-2/4 z-10 left-20">
            <h2 className="md:text-7xl text-left font-description">
              ModaBella
            </h2>
            <p className="md:text-2xl text-left font-description w-6/12">
              Unleash Your Fashion Potential at ModaBella! Explore curated
              collections, find your perfect look, and embrace your unique
              style. Elevate your wardrobe with must-have fashion essentials.
              Shop now and redefine your fashion story!
            </p>
            <div className="text-left space-x-5">
              <button className="btn btn-outline mt-5 px-10">Buy now!</button>
              <button className="btn btn-outline mt-5 px-10">
                Watch Our Blogs
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
