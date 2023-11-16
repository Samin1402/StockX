import React from 'react';
import { useState} from "react";
import Header from "../Header";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
import "./Pricing.css";

const Pricing = () => {

    return (
        <>
        <Header />
          <div className="pricing">
            <div className="we-review-all">
              We review all ads to keep everyone on list IT safe and happy.
            </div>
            <div className="frame-parent">
              <div
                className="recommended-for-you-parent"
                
              >
                <b className="recommended-for-you">Recommended for you</b>
                <div className="frame-child" />
                <div className="monthly-plan-wrapper">
                  <b className="monthly-plan">Monthly Plan</b>
                </div>
                <div className="active-with-high-exposure-for-wrapper">
                  <div className="monthly-plan">
                    Active with high exposure for 30 days
                  </div>
                </div>
                <div className="parent">
                  <b className="b">$300*</b>
                  <b className="b1">$400*</b>
                  <div className="frame-item" />
                </div>
                <div className="you-save-34-wrapper">
                  <div className="you-save-34">You Save 34%</div>
                </div>
                <div className="button2">
                  <div className="start-hiring-now">Choose Plan</div>
                </div>
                <div className="frame-group">
                  <div className="frame-container">
                    <div className="check-icon-wrapper">
                      <img className="check-icon" alt="" src="/checkicon.svg" />
                    </div>
                    <div className="refreshed-3-times">Active for 30 days</div>
                  </div>
                  <div className="frame-container">
                    <div className="check-icon-wrapper">
                      <img className="check-icon" alt="" src="/checkicon.svg" />
                    </div>
                    <div className="refreshed-3-times">Refreshed 3 times</div>
                  </div>
                  <div className="frame-container">
                    <div className="check-icon-wrapper">
                      <img className="check-icon" alt="" src="/checkicon.svg" />
                    </div>
                    <div className="refreshed-3-times">Featured for 7 days</div>
                  </div>
                </div>
              </div>
              <div className="frame-parent2">
                <div className="yearly-plan-wrapper">
                  <b className="yearly-plan">Yearly plan</b>
                </div>
                <div className="active-with-high-exposure-for-container">
                  <div className="monthly-plan">
                    Active with high exposure for 365 days
                  </div>
                </div>
                <div className="frame-wrapper">
                  <div className="group">
                    <b className="b">$450*</b>
                    <b className="b1">$600*</b>
                    <div className="frame-inner" />
                  </div>
                </div>
                <div className="you-save-54-wrapper">
                  <div className="you-save-34">You Save 54%</div>
                </div>
                <div className="button2-wrapper" >
                  <div className="button21">
                    <div className="start-hiring-now">Choose Plan</div>
                  </div>
                </div>
                <div className="frame-group">
                  <div className="frame-container">
                    <div className="check-icon-wrapper">
                      <img className="check-icon" alt="" src="/checkicon1.svg" />
                    </div>
                    <div className="refreshed-3-times">Active for 365 days</div>
                  </div>
                  <div className="frame-container">
                    <div className="check-icon-wrapper">
                      <img className="check-icon" alt="" src="/checkicon1.svg" />
                    </div>
                    <div className="refreshed-3-times">Refreshed 6 times</div>
                  </div>
                  <div className="frame-container">
                    <div className="check-icon-wrapper">
                      <img className="check-icon" alt="" src="/checkicon1.svg" />
                    </div>
                    <div className="refreshed-3-times">Featured for 14 days</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="union-parent">
              <img className="union-icon" alt="" src="/union.svg" />
              <img className="union-icon1" alt="" src="/union1.svg" />
              <b className="pricing1">pricing</b>
            </div>
            <div className="rectangle-parent">
              <div className="group-child" />
              <div className="group-item" />
              <div className="x-stocks-parent">
                <img className="x-stocks-icon" alt="" src="/3x-stocks@2x.png" />
                <div className="image-3-parent">
                  <img className="image-3-icon" alt="" src="/image-3@2x.png" />
                  <img className="image-3-icon" alt="" src="/image-4@2x.png" />
                  <img className="image-59-icon" alt="" src="/image-59@2x.png" />
                </div>
                
                  </div>
                </div>
              </div>
          
          
          <Footer />
        </>
      
      );
    };
    
    export default Pricing;
      