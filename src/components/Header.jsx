import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header fixed-top d-flex align-items-center">
      <div className="container d-flex align-items-center justify-content-between">
        <Link to="/" className="logo d-flex align-items-center me-auto me-lg-0">
          <h1>
            Cafe Tanveer<span>.</span>
          </h1>
        </Link>

        <nav id="navbar" className="navbar">
          <Link to="/Home">Home</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/login">Login</Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
