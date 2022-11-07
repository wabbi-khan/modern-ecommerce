import React from "react";
import css from "./Testimonials.module.css";
import Hero from "../../assets/testimonialHero.png";
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
    </div>
  );
};

export default Testimonials;
