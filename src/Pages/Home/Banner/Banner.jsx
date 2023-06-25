import { Swiper, SwiperSlide } from "swiper/react";
import "./swiperStyles.css";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

import slider1 from "../../../assets/slider1.jpg";
import slider2 from "../../../assets/slider2.jpg";
import slider3 from "../../../assets/slider3.jpg";
import slider4 from "../../../assets/slider4.jpg";

const Banner = () => {
  return (
    <div>
      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>
            <img src={slider1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slider4} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="absolute top-1/4 z-10 left-20">
        <h2 className="text-6xl font-description">ModaBella</h2>
        <p className="text-xl font-description w-6/12">
          Unleash Your Fashion Potential at ModaBella! Explore curated
          collections, find your perfect look, and embrace your unique style.
          Elevate your wardrobe with must-have fashion essentials. Shop now and
          redefine your fashion story!
        </p>
      </div>
    </div>
  );
};

export default Banner;
