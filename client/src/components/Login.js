import React, { useState } from "react";
import ThreeCircles from "./HomeDesign/ThreeCircles";
import LoginSVG from "../assets/login.svg";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { CgPassword } from "react-icons/cg";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const UserLogin = async (e) => {
    e.preventDefault();
    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await res.json();
    // console.log(data);
    if (res.status === 400 || !data) {
      toast.error(data.error);
    } else {
      toast.success(data.message);
      history.push("/dashboard");
    }
  };

  return (
    <>
      <div className="home_section register_section">
        <div className="form_content">
          <div className="form_left">
            <h2 className="form_title">Login</h2>
            <form className="register_form" id="register_form" method="POST">
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form_group">
                <label htmlFor="password">
                  <CgPassword size="20" />
                </label>
                <input
                  type="password"
                  className="password"
                  id="password"
                  autoComplete="off"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form_group">
                <input
                  className="button"
                  type="submit"
                  name="register"
                  id="register"
                  value="Login"
                  onClick={UserLogin}
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
