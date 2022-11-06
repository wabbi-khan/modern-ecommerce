import React, { useState } from "react";
import css from "./Products.module.css";
import Plane from "../../assets/plane.png";
import { ProductsData } from "../../data/products";
const Products = () => {
  const [menuData, setMenuData] = useState(ProductsData);
  return (
    <div className={css.container}>
      <img src={Plane} alt='Plane' />
      <span>Our Featured Products</span>
      <div className={css.products}>
        <ul className={css.menu}>
          <li>All</li>
          <li>Skin Care</li>
          <li>Conditioners</li>
          <li>Foundations</li>
        </ul>
        <div className={css.list}>
          {menuData.map((product, i) => (
            <div className={css.product}>Products</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
