import React from "react";
import "./Slide.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import { SliderProducts } from "../../data/products";
// * import Swiper style
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const Slider = () => {
  return (
    <div className='s_container'>
      <Swiper
        modules={{ Pagination, Navigation }}
        loopFillGroupWithBlank={true}
        navigation={true}
        sidePerView={3}
        spaceBetween={40}
        slidesPerGroup={1}
        loop={true}
      >
        {SliderProducts.map((slide, i) => (
          <SwiperSlide>
            <div className='left_s'>
              <div className='name'>
                <span>{slide.name}</span>
                <span>{slide.detail}</span>
              </div>
              <span>{slide.price}$</span>
              <div>Show Now</div>
            </div>
            <img src={slide.img} alt='ProductImg' />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
