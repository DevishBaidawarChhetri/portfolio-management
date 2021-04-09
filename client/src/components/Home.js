import React from "react";
import { Link } from "react-router-dom";
import Img from "../assets/img1.png";

const Home = () => {
  return (
    <>
      <div className="home_section">
        <div className="home_left">
          <div className="left_details">
            <h1>
              Monitor your profit with <br />
              <strong>
                Portfolio <span className="management">Management</span>
              </strong>
            </h1>
            <h2>We provide best representation of your profit.</h2>
            <Link className="button" to="/about">
              Get Started
            </Link>
          </div>
        </div>
        <div className="home_right">
          <img src={Img} alt="Portfolio Management" />
        </div>
      </div>

      <div className="circle1"></div>
      <div className="circle2"></div>
      <div className="circle3"></div>
    </>
  );
};

export default Home;
