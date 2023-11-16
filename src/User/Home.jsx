import React from "react";
import "./Home.css";
import home from "../assets/home.png";
import Footer from '../Footer';
import Header from "../Header";

const Home = (props) => {
  return (
    <div>
      <Header />
      <div className="Homecontainer">
        <div className="homeimg">
          <img className="home" src={home} alt="" />
        </div>
        <div className="heading">Live Market Trends</div>
        <div className="finance">
          {/* Api for financing */}
        </div>

        <div>
            <button className="Subscribe">
            Subscribe
            </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
