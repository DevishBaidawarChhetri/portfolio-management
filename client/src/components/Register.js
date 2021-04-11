import React from "react";
import ThreeCircles from "./HomeDesign/ThreeCircles";
import RegisterSVG from "../assets/register.svg";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { CgPassword } from "react-icons/cg";

const Register = () => {
  return (
    <>
      <div className="home_section register_section">
        <div className="form_content">
          <div className="form_left">
            <h2 className="form_title">Register</h2>
            <form className="register_form" id="register_form">
              <div className="form_group">
                <label htmlFor="name">
                  <FaUser size="20" />
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="off"
                  placeholder="Full Name"
                />
              </div>

              <div className="form_group">
                <label htmlFor="email">
                  <MdEmail size="20" />
                </label>
                <input
                  type="text"
                  className="email"
                  id="email"
                  autoComplete="off"
                  placeholder="Email"
                />
              </div>

              <div className="form_group">
                <label htmlFor="phone">
                  <FiPhone size="20" />
                </label>
                <input
                  type="number"
                  className="phone"
                  id="phone"
                  autoComplete="off"
                  placeholder="Phone"
                />
              </div>

              <div className="form_group">
                <label htmlFor="password">
                  <CgPassword size="20" />
                </label>
                <input
                  type="text"
                  className="password"
                  id="password"
                  autoComplete="off"
                  placeholder="Password"
                />
              </div>
              <div className="form_group">
                <input
                  className="button"
                  type="submit"
                  name="register"
                  id="register"
                  value="Register"
                />
              </div>
              <p>
                Already a member?{" "}
                <Link to="/login" className="management">
                  Login
                </Link>
              </p>
            </form>
          </div>
          <div className="form_right">
            <img src={RegisterSVG} alt="Register Imagee" />
          </div>
        </div>
      </div>
      <ThreeCircles />
    </>
  );
};

export default Register;
