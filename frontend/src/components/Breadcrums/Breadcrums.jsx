import React from "react";
import "./Breadcrums.css";
import right_arrow from "../Assets/dresses/right_arrow.png";

const Breadcrums = (props) => {
  {
    /** we will get the products from props */
  }
  const { product } = props;
  return (
    <div className="breadcrum">
      Home <img src={right_arrow} alt="" /> Shop{" "}
      <img src={right_arrow} alt="" /> {product.category}{" "}
      <img src={right_arrow} alt="" /> {product.name}
    </div>
  );
};

export default Breadcrums;
