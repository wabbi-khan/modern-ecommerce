import React, { useState } from "react";
import css from "./Products.module.css";
import Plane from "../../assets/plane.png";
import { ProductsData } from "../../data/products";
import { useAutoAnimate } from "@formkit/auto-animate/react";
const Products = () => {
  const [parent] = useAutoAnimate();
  const [menuData, setMenuData] = useState(ProductsData);
  const filter = (type) => {
    setMenuData(ProductsData.filter((product) => product.type === type));
  };
  return (
    <div className={css.container}>
      <img src={Plane} alt='Plane' />
      <span>Our Featured Products</span>
      <div className={css.products}>
        <ul className={css.menu}>
          <li onClick={() => setMenuData(ProductsData)}>All</li>
          <li onClick={() => filter("skin care")}>Skin Care</li>
          <li onClick={() => filter("conditioner")}>Conditioners</li>
          <li onClick={() => filter("foundation")}>Foundations</li>
        </ul>
        <div className={css.list} ref={parent}>
          {menuData.map((product, i) => (
            <div className={css.product}>
              <div className='left_s'>
                <div className='name'>
                  <span> {product.name} </span>
                  <span> {product.detail} </span>
                </div>
                <span>{product.price}$</span>
                <div>Show Now</div>
              </div>
              <img src={product.img} alt='pro-img' className='img-p' />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
