import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="">
      <div className="">
        <Link to="/" className="">
          <h1>Cafe Onion</h1>
        </Link>

        <nav className="">
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/login">Login</Link>
        </nav>
      </div>
    </div>
  );
};

export default Header;
