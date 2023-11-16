import React from 'react';
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./assets/logo.png";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();  // Use useNavigate for programmatic navigation

  const onHomeTextClick = useCallback(() => {
    navigate('/Home');  // Use navigate for navigation
  }, [navigate]);

  const onMassagesTextClick = useCallback(() => {
    navigate('/Messages');
  }, [navigate]);

  const onAboutUsTextClick = useCallback(() => {
    navigate('/AboutUs');
  }, [navigate]);

  const onContactUsTextClick = useCallback(() => {
    navigate('/ContactUs');
  }, [navigate]);

  const onPricingTextClick = useCallback(() => {
    navigate('/Pricing');
  }, [navigate]);

  const onGroupContainer6Click = useCallback(() => {
    // Please sync "user View" to the project
  }, []);

  const onGroupContainer7Click = useCallback(() => {
    // Please sync "User Login" to the project
  }, []);

  const onGroupContainer10Click = useCallback(() => {
    navigate('/');
  }, [navigate]);

  const onGroupContainer12Click = useCallback(() => {
    // Please sync "Subscription Plan" to the project
  }, []);

  return (
    <div className="header1">
      <img className="logo-icon1" alt="" src="/logo.svg" />
      <div className="group-parent5">
        <div className="parent1">
          <div className="div2">+123 456 789</div>
          <img className="phone-icon2" alt="" src="/phone2.svg" />
        </div>
        <div className="free-consultancy2">{`Free Consultancy `}</div>
      </div>
      <img className="x-stocks-icon2" alt="./assets/logo.png" src={logo} />
      <div className="nav1">
        <b className="home1" onClick={onHomeTextClick}>
          Home
        </b>
        <div className="massages1" onClick={onMassagesTextClick}>
          Messages
        </div>
        <div className="about-us1" onClick={onAboutUsTextClick}>
          About Us
        </div>
        <div className="pricing3" onClick={onPricingTextClick}>
          Pricing
        </div>
        <div className="contact-us1" onClick={onContactUsTextClick}
        >Contact us</div>
      </div>
      <div className="frame-parent8">
        <div className="ellipse-group">
          <img className="frame-child1" alt="" src="/ellipse-19@2x.png" />
          <div className="anna1">Anna</div>
        </div>
        <img
          className="akar-iconschevron-down1"
          alt=""
          src="/akariconschevrondown.svg"
        />
      </div>
      <div className="header-child">
        <div className="group-frame">
          <div className="group-frame">
            <div className="group-frame">
              <div className="rectangle-div" />
              <div className="group-parent7">
                <div className="my-profile-container">
                  <div className="my-profile1">My Profile</div>
                </div>
                <img className="group-child7" alt="" src="/group-177091.svg" />
              </div>
              <div className="group-child8" />
              <div className="group-child9" />
              <div className="group-child10" />
              <div className="group-child11" />
              <div
                className="message-square-group"
                onClick={onGroupContainer6Click}
              >
                <img
                  className="message-square-icon1"
                  alt=""
                  src="/messagesquare.svg"
                />
                <div className="message-board-container">
                  <div className="my-profile1">Message Board</div>
                </div>
              </div>
              <div className="logout-group" onClick={onGroupContainer7Click}>
                <div className="logout1">Logout</div>
                <img className="group-child12" alt="" src="/group-177094.svg" />
              </div>
            </div>
            <div className="group-parent8" onClick={onGroupContainer10Click}>
              <div className="billing-container">
                <div className="my-profile1">Billing</div>
              </div>
              <img className="group-child13" alt="" src="/group-177219.svg" />
            </div>
            <div className="group-parent9" onClick={onGroupContainer12Click}>
              <div className="subscription-plan-container">
                <div className="my-profile1">Subscription Plan</div>
              </div>
              <img className="group-child14" alt="" src="/group-177220.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
