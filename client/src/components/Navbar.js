import React from "react";
import { NavLink } from "react-router-dom";
import { IoMdInformationCircle } from "react-icons/io";
import { CgLogIn } from "react-icons/cg";

const Navbar = () => {
  const user = localStorage.getItem("userId");
  // console.log(user);

  return (
    <>
      <nav>
        <div className="nav_holder">
          <div className="home_link">
            <NavLink to="/">
              <span className="portfolio">Portfolio</span>
              <span className="management"> Management</span>
            </NavLink>
          </div>
          <div className="nav_links">
            <NavLink activeClassName="menu_active" to="/about" title="About">
              <IoMdInformationCircle />
            </NavLink>
            {user !== null ? (
              <NavLink activeClassName="menu_active" to="/dashboard">
                Dashboard
              </NavLink>
            ) : (
              <NavLink activeClassName="menu_active" to="/login" title="Login">
                <CgLogIn />
              </NavLink>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
