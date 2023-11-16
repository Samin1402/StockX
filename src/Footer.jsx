
import React from "react";
import logo from "./assets/logo.png";
import insta from "./assets/insta.png";
import fb from "./assets/fb.png";
import x from "./assets/x.png";
import "./Footer.css"; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logo">
        <img src={logo} alt="Logo" />
        </div>

        <div className="footer-social">
          <img src={fb} alt="" />
          <img src={x} alt="" />
          <img src={insta} alt="" />
        </div>
        
        <div className="footer-info">
          <div>Free Consultancy</div>
          <div>+123 456 789</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
