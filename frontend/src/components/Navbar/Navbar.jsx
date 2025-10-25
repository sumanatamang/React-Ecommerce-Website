import React, { useState, useContext, useRef } from "react";
import "./Navbar.css";
import logo from "../Assets/dresses/logo.png";
import cart_icon from "../Assets/dresses/cart.png";
import { Link } from "react-router-dom";
import { HomeContext } from "../../Context/HomeContext";
import dropdown from "../Assets/dresses/dropdown.png";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartItems } = useContext(HomeContext); // navbar cart display.
  // adjusting responsive screen size
  const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" style={{ width: "120px", height: "70px" }} />
        <p>NEPALI POSHAK</p>
      </div>
      <img
        className="nav-dropdown"
        onClick={dropdown_toggle}
        src={dropdown}
        alt=""
      />
      <ul ref={menuRef} className="nav-menu">
        {" "}
        {/* link is created so when we navigate to men, women our browser have link in it */}
        <li
          onClick={() => {
            setMenu("home");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/">
            Home
          </Link>
          {menu === "home" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("womens");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/womens">
            Women
          </Link>
          {menu === "womens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("mens");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/mens">
            Men
          </Link>
          {menu === "mens" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/kids">
            Kids
          </Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("ornament");
          }}
        >
          <Link style={{ textDecoration: "none" }} to="/ornament">
            Ornaments
          </Link>
          {menu === "ornament" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <Link style={{ textDecoration: "none" }} to="/login">
          <button>Login</button>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/cart">
          <img
            src={cart_icon}
            alt=""
            style={{ width: "30px", height: "30px" }}
          />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
};
export default Navbar;
