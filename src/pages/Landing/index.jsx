import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Landing = () => {
  return (
    <div className="landing-container">
      <h1>SEO Checkmate</h1>
      <p>Win the SEO game with SEO Checkmate by your side!</p>
      <Link to="/home">Get Started</Link>
    </div>
  );
};

export default Landing;
