import React from "react";
import ThreeCircles from "./HomeDesign/ThreeCircles";
import LoginSVG from "../assets/login.svg";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { CgPassword } from "react-icons/cg";

const Login = () => {
  return (
    <>
      <div className="home_section register_section">
        <div className="form_content">
          <div className="form_left">
            <h2 className="form_title">Login</h2>
            <form className="register_form" id="register_form">
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
                  value="Login"
                />
              </div>
              <p>
                New user?{" "}
                <Link to="/register" className="management">
                  Register
                </Link>
              </p>
            </form>
          </div>
          <div className="form_right">
            <img src={LoginSVG} alt="Register Imagee" />
          </div>
        </div>
      </div>
      <ThreeCircles />
    </>
  );
};

export default Login;
