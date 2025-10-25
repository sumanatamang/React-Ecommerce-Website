import React, { useContext } from "react";
import "../pages/CSS/ShopCateory.css";
import { HomeContext } from "../Context/HomeContext";
import icons_dropdown from "../components/Assets/dresses/icons_dropdown.png";
import Item from "../components/Item/Item";
const ShopCategory = (props) => {
  const { all_product } = useContext(HomeContext);
  return (
    <div className="shop-category">
      <img
        className="shopcategory-banner"
        src={props.banner}
        alt=""
        style={{ width: "1000px", height: "300px" }}
      />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-16</span> out of 85 products
        </p>
        <div className="shopcategory-sort">
          Sort By <img src={icons_dropdown} alt="" />
        </div>
      </div>

      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                price={item.price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">Explore More</div>
    </div>
  );
};

export default ShopCategory;
