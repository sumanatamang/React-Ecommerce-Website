import React from "react";
import "./Gurungmagar.css";
import gurung_magar from "../Assets/Gurungmagar";
import Item from "../Item/Item";
const Gurungmagar = () => {
  return (
    <div className="gurungcollection">
      <h1>Gurung & Magar Attire</h1>
      <hr />
      <div className="gmcollections">
        {gurung_magar.map((item, i) => {
          return (
            <Item
              Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Gurungmagar;
