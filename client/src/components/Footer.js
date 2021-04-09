import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const location = useLocation().pathname;
  return (
    <div className={`soc_links ${location === `/` ? `` : `soc_center`}`}>
      <Link to={{ pathname: "https://facebook.com" }} target="_blank">
        <FaFacebook />
      </Link>
      <Link to={{ pathname: "https://twitter.com" }} target="_blank">
        <FaTwitter />
      </Link>
      <Link to={{ pathname: "https://instagram.com" }} target="_blank">
        <FaInstagram />
      </Link>
      <p>
        Copyright &copy; <Link to="/">Portfolio Management</Link>{" "}
        {new Date().getFullYear()}.
      </p>
    </div>
  );
};

export default Footer;
