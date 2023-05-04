import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header d-flex align-items-center">
      <div className="container d-flex align-items-center justify-content-between">
        <Link
          to="/Home"
          className="logo d-flex align-items-center me-auto me-lg-0"
        >
          <h1>Cafe Tanveer</h1>
        </Link>

        <nav className="">
          <Link to="/Home">Home</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/login">Login</Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
