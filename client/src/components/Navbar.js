import React from "react";
import { NavLink } from "react-router-dom";
import { IoMdInformationCircle } from "react-icons/io";
import { CgLogIn } from "react-icons/cg";

const Navbar = () => {
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
            <NavLink activeClassName="menu_active" to="/login" title="Login">
              <CgLogIn />
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
