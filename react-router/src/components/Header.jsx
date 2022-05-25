import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navBar">
      <Link to="/">Home Page</Link>
      <Link to="/products">Products</Link>
    </div>
  );
};

export default Header;
