import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import Logo from "../../assets/seo.png";

const Nav = () => {
  return (
    <div className="nav">
      <div className="logo-container">
        <img src={Logo} alt="logo" className="logo" />
        <Link to="/home">
          <span>SEO Checkmate</span>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
