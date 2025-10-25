import React from "react";
import "./Footer.css";
import footer_logo from "../Assets/dresses/logo2.png";
import insta from "../Assets/dresses/insta.jpg";
import Facebook from "../Assets/dresses/Facebook.png";
import viber from "../Assets/dresses/viber.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>NEPALI POSHAK</p>
      </div>
      <ul className="footer_links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icon-container">
          <img src={insta} alt="" />
        </div>
        <div className="footer-icon-container">
          <img src={Facebook} alt="" />
        </div>
        <div className="footer-icon-container">
          <img src={viber} alt="" />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @2025- All Right Reserved.</p>
      </div>
    </div>
  );
};
{
  /**we mount footer in App.js */
}

export default Footer;
