import React from "react";
import { NavLink } from "react-router-dom";
import { IoMdInformationCircle } from "react-icons/io";
import { GoDashboard } from "react-icons/go";

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
            <NavLink activeClassName="menu_active" to="/about">
              <IoMdInformationCircle />
            </NavLink>
            <NavLink activeClassName="menu_active" to="/dashboard">
              <GoDashboard />
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
