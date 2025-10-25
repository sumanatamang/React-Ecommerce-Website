import React from "react";
import "./Hero.css";
import culturaldiversity from "../Assets/dresses/culturaldiversity.jpg";
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2> Ethnic Wear</h2>
        <div>
          <div className="hero-hand-icon">
            <p>Rooted in Culture. Verified by Truth</p>
          </div>
          <p>Your Identity</p>
          <p>Your Nationality</p>
        </div>
        <div className="hero-latest-btn">
          <div>Explore More</div>
        </div>
      </div>
      <div className="hero-right">
        <img src={culturaldiversity} alt="" />
      </div>
    </div>
  );
};

export default Hero;
