import React from 'react';
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./assets/logo.png";
import "./nav.css";

const nav = () => {
    return(
    <header className="header">
    <div className="header-content">
      <div className="logo">
      <img src={logo} alt="Logo" />
      </div>


      <div className="header-nav">
      <div className="home">
          <a href="/Home">Home</a>
        </div>
        <div className="massages">
          <a href="/Messages">Messages</a>
        </div>
        <div className="about-us">
          <a href="/AboutUs">About Us</a>
        </div>
        <div className="pricing2">
          <a href="/Pricing">Pricing</a>
        </div>
        <div className="contact-us">
          <a href="/ContactUs">Contact Us</a>
        </div>
        <div className="profile">
          <a href="/Profile">Your Profile</a>
        </div>
        </div>

        <div className="header-info">
          <div>Free Consultancy</div>
          <div>+123 456 789</div>
        </div>
      </div>
      </header>
   
  

    );

}