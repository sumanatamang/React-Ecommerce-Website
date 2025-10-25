import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";
const Item = (props) => {
  return (
    <div className="item">
      {/**linking product with image */}
      <Link to={`/product/${props.id}`}>
        <img onClick={window.scrollTo(0, 0)} src={props.image} alt="" />
      </Link>{" "}
      {/** THIS window.scrollto will allow to open the clicked product to showcase on top of page */}
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">
          ₹{props.price}
          {/** if required we will add rupee sign infront of ${props.new_price}  like this*/}
        </div>
      </div>
    </div>
  );
};

export default Item;
