import React from "react";
import css from "./Testimonials.module.css";
import Hero from "../../assets/testimonialHero.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { TestimonialsData } from "../../data/testimonials";

const Testimonials = () => {
  return (
    <div className={css.testimonials}>
      <div className={css.wrapper}>
        <div className={css.container}>
          <span>Top Rated</span>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, saepe.
          </span>
        </div>
        <img src={Hero} alt='hero' />
        <div className={css.container}>
          <span>100K</span>
          <span>Happy Customers</span>
        </div>
      </div>
      <div className={css.reviews}>reviews</div>
      <div className={css.carousal}>
        <Swiper
          slidesPerView={3}
          slidesPerGroup={1}
          spaceBetween={20}
          className={css.Tcarousal}
        >
          {TestimonialsData.map((testimonial, i) => (
            <SwiperSlide>
              <div className={css.testimonial} key={i}>
                <img src={testimonial.image} alt='testimonial-img' />
                <span> {testimonial.comment} </span>
                <hr />
                <span>{testimonial.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
