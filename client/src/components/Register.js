import React, { useState } from "react";
import ThreeCircles from "./HomeDesign/ThreeCircles";
import RegisterSVG from "../assets/register.svg";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { CgPassword } from "react-icons/cg";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const history = useHistory();
  // State
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  // Handle Input
  const handleInputs = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  // Register User
  const RegisterUser = async (e) => {
    e.preventDefault();
    const { name, email, phone, password } = user;
    // console.log(name, email, phone, password);
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        password,
      }),
    });
    const data = await res.json();
    console.log(data);
    if (res.status === 422 || !data) {
      console.log("Invalid Registration");
      toast.error(data.error);
    } else {
      toast.success(data.message);
      history.push("/login");
    }
  };

  return (
    <>
      <div className="home_section register_section">
        <div className="form_content">
          <div className="form_left">
            <h2 className="form_title">Register</h2>
            <form className="register_form" id="register_form" method="POST">
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
                  value={user.name}
                  onChange={handleInputs}
                />
              </div>

              <div className="form_group">
                <label htmlFor="email">
                  <MdEmail size="20" />
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  autoComplete="off"
                  placeholder="Email"
                  value={user.email}
                  onChange={handleInputs}
                />
              </div>

              <div className="form_group">
                <label htmlFor="phone">
                  <FiPhone size="20" />
                </label>
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  autoComplete="off"
                  placeholder="Phone"
                  value={user.phone}
                  onChange={handleInputs}
                />
              </div>

              <div className="form_group">
                <label htmlFor="password">
                  <CgPassword size="20" />
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="off"
                  placeholder="Password"
                  value={user.password}
                  onChange={handleInputs}
                />
              </div>
              <div className="form_group">
                <input
                  className="button"
                  type="submit"
                  name="register"
                  id="register"
                  value="Register"
                  onClick={RegisterUser}
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
