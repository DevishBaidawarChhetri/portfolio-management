import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { IoMdInformationCircle } from "react-icons/io";
import { RiDashboardLine } from "react-icons/ri";
import { CgLogIn, CgLogOut } from "react-icons/cg";
import { UserContext } from "../App";

const Navbar = () => {
  const { state, dispatch } = useContext(UserContext);
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
            {/* <NavLink
              activeClassName="menu_active"
              to="/dashboard"
              title="Dashboard"
            >
              <RiDashboardLine />
            </NavLink>
            <NavLink activeClassName="menu_active" to="/login" title="Login">
              <CgLogIn />
            </NavLink> */}
            {state ? (
              <>
                <NavLink
                  activeClassName="menu_active"
                  to="/dashboard"
                  title="Dashboard"
                >
                  <RiDashboardLine />
                </NavLink>
                <NavLink to="/logout" title="Logout">
                  <CgLogOut />
                </NavLink>
              </>
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
