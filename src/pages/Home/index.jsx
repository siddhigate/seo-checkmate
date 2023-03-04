import React from "react";
import { Link } from "react-router-dom";
import Nav from "../../components/Nav/";
import { homeLinks } from "./data";
import "./index.css";

const Home = () => {
  return (
    <div>
      <Nav />

      <div className="home-link-container">
        {homeLinks.map((homeLink) => {
          return (
            <Link to={homeLink.link} className='home-link'>
              <section>
                <h2>{homeLink.name}</h2>
                <p>{homeLink.tagline}</p>
              </section>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
