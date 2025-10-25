import React from "react";
import "./Offers.css";
import magar_dress from "../Assets/dresses/magar_dress.png";

const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>Don't miss out on the full outfit deal!</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={magar_dress} alt="" />
      </div>
    </div>
  );
};

export default Offers;
