import React from "react";
import "./Navbar.css";
import navlogo from "../../assets/adminlogo.png";
import navProfile from "../../assets/adminprofile.png";
const Navbar = () => {
  return (
    <div className="navbar">
      <img src={navlogo} alt="" className="nav-logo" />
      <img src={navProfile} className="nav-profile" alt="" />
    </div>
  );
};

export default Navbar;
