import React from 'react';
import { useState, useCallback } from "react";
import Header from "../Header";

import "./Profile.css";
const Profile = () => {
  const [isHeaderOpen, setHeaderOpen] = useState(false);

  const onBillingTextClick = useCallback(() => {
    // Please sync "Billing" to the project
  }, []);

  const onSubscriptionPlanTextClick = useCallback(() => {
    // Please sync "Subscription Plan" to the project
  }, []);

  const onEditProfileContainerClick = useCallback(() => {
    // Please sync "profile" to the project
  }, []);

  const onMassagesTextClick = useCallback(() => {
    // Please sync "user View" to the project
  }, []);

  const onAboutUsTextClick = useCallback(() => {
    // Please sync "About us" to the project
  }, []);

  const onPricingTextClick = useCallback(() => {
    // Please sync "Pricing" to the project
  }, []);

  const openHeader = useCallback(() => {
    setHeaderOpen(true);
  }, []);

  const closeHeader = useCallback(() => {
    setHeaderOpen(false);
  }, []);

  const onGroupContainer15Click = useCallback(() => {
    // Please sync "user View" to the project
  }, []);

  const onGroupContainer16Click = useCallback(() => {
    // Please sync "User Login" to the project
  }, []);

  const onGroupContainer19Click = useCallback(() => {
    // Please sync "Pricing" to the project
  }, []);

  const onGroupContainer21Click = useCallback(() => {
    // Please sync "Subscription Plan" to the project
  }, []);

  return (
    <>
    <Header />
      <div className="profile">
        <div className="users">Users</div>
        <div className="profile-inner">
          <div className="union-parent">
            <img className="union-icon" alt="" src="/union.svg" />
            <img className="union-icon1" alt="" src="/union1.svg" />
            <b className="profile1">Profile</b>
          </div>
        </div>
        <div className="settings-header">
          <b className="account">Account</b>
          <b className="billing" onClick={onBillingTextClick}>
            Billing
          </b>
          <b
            className="subscription-plan"
            onClick={onSubscriptionPlanTextClick}
          >
            Subscription Plan
          </b>
          <div className="settings-header-child" />
        </div>
        <div className="your-profile">{`Your Profile `}</div>
        <div className="security">{`Security `}</div>
        <div className="name-parent">
          <div className="name">{`Name: `}</div>
          <div className="rena-sony">Rena Sony</div>
          <div className="group-child" />
        </div>
        <div className="username-parent">
          <div className="username">Username:</div>
          <div className="renasony">@renasony</div>
          <div className="group-child" />
        </div>
        <div className="email-parent">
          <div className="email">{`Email: `}</div>
          <div className="aminulaudiocom">aminul@audio.com</div>
          <div className="group-child" />
        </div>
        <div className="password-parent">
          <div className="password">Password</div>
          <div className="password-change">
            <div className="password-change-child" />
            <div className="change-password">Change Password</div>
            <img
              className="edit-duotone-line-icon"
              alt=""
              src="/edit-duotone-line.svg"
            />
          </div>
        </div>
        <div className="edit-profile" onClick={onEditProfileContainerClick}>
          <div className="edit-profile-child" />
          <div className="edit-profile1">Edit Profile</div>
          <img
            className="edit-duotone-line-icon1"
            alt=""
            src="/edit-duotone-line1.svg"
          />
        </div>
        <div className="logout">
          <div className="logout-child" />
          <div className="logout1">Logout</div>
        </div>
        <div className="delete-account">
          <div className="delete-audiosed-account">Delete Audiosed account</div>
          <div className="deleted-account">
            <div className="deleted-account-child" />
            <div className="delete-account1">Delete Account</div>
            <img className="remove-icon" alt="" src="/remove.svg" />
          </div>
        </div>
        <img
          className="sign-out-circle-icon"
          alt=""
          src="/sign-out-circle.svg"
        />
        <div className="profile-child" />
        <img className="profile-item" alt="" src="/group-15018.svg" />
        <div className="rectangle-parent">
          <div className="rectangle-div" />
          <div className="group-child1" />
          <div className="x-stocks-parent">
            <img className="x-stocks-icon" alt="" src="/3x-stocks@2x.png" />
            <div className="image-3-parent">
              <img className="image-3-icon" alt="" src="/image-3@2x.png" />
              <img className="image-3-icon" alt="" src="/image-4@2x.png" />
              <img className="image-59-icon" alt="" src="/image-59@2x.png" />
            </div>
            <div className="group-parent">
              <div className="parent">
                <div className="div">+123 456 789</div>
                <img className="phone-icon" alt="" src="/phone.svg" />
              </div>
              <div className="free-consultancy">{`Free Consultancy `}</div>
            </div>
          </div>
        </div>
        <div className="header">
          <img className="logo-icon" alt="" src="/remove.svg" />
          <div className="group-container">
            <div className="group">
              <div className="div1">+123 456 789</div>
              <img className="phone-icon1" alt="" src="/phone1.svg" />
            </div>
            <div className="free-consultancy1">{`Free Consultancy `}</div>
          </div>
          <img className="x-stocks-icon1" alt="" src="/3x-stocks@2x.png" />
          <div className="nav">
            <b className="home">Home</b>
            <div className="massages" onClick={onMassagesTextClick}>
              Massages
            </div>
            <div className="about-us" onClick={onAboutUsTextClick}>
              About Us
            </div>
            <div className="pricing" onClick={onPricingTextClick}>
              Pricing
            </div>
            <div className="contact-us">Contact us</div>
          </div>
          <div className="frame-parent" onClick={openHeader}>
            <div className="ellipse-parent">
              <img className="frame-child" alt="" src="/ellipse-19@2x.png" />
              <div className="anna">Anna</div>
            </div>
            <img
              className="akar-iconschevron-down"
              alt=""
              src="/akariconschevrondown.svg"
            />
          </div>
          <div className="header-inner">
            <div className="group-wrapper">
              <div className="group-wrapper">
                <div className="group-wrapper">
                  <div className="group-child2" />
                  <div className="group-parent1">
                    <div className="my-profile-wrapper">
                      <div className="my-profile">My Profile</div>
                    </div>
                    <img className="group-icon" alt="" src="/remove.svg" />
                  </div>
                  <div className="line-div" />
                  <div className="group-child3" />
                  <div className="group-child4" />
                  <div className="group-child5" />
                  <div
                    className="message-square-parent"
                    onClick={onGroupContainer15Click}
                  >
                    <img
                      className="message-square-icon"
                      alt=""
                      src="/remove.svg"
                    />
                    <div className="message-board-wrapper">
                      <div className="my-profile">Message Board</div>
                    </div>
                  </div>
                  <div
                    className="logout-parent"
                    onClick={onGroupContainer16Click}
                  >
                    <div className="logout2">Logout</div>
                    <img className="group-child6" alt="" src="/remove.svg" />
                  </div>
                </div>
                <div
                  className="group-parent2"
                  onClick={onGroupContainer19Click}
                >
                  <div className="billing-wrapper">
                    <div className="my-profile">Billing</div>
                  </div>
                  <img className="group-child7" alt="" src="/remove.svg" />
                </div>
                <div
                  className="group-parent3"
                  onClick={onGroupContainer21Click}
                >
                  <div className="subscription-plan-wrapper">
                    <div className="my-profile">Subscription Plan</div>
                  </div>
                  <img className="group-child8" alt="" src="/remove.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
 
    </>
  );
};

export default Profile;
