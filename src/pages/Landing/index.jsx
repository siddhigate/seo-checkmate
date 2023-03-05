import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import SEOCheckmate from "../../assets/seo.png";

const Landing = () => {
  return (
    <div className="landing-container landing">
      <img src={SEOCheckmate} alt="SEO Checkmate" className="logo" />
      <h1>SEO Checkmate</h1>
      <p>Win the SEO game with SEO Checkmate by your side!</p>
      <Link to="/home">Get Started</Link>

      <p className="bg-logo css">
        <code>{"<meta></meta>"}</code>{" "}
      </p>
      <p className="bg-logo html">
        {" "}
        <code>{"<title></title>"}</code>
      </p>
      <p className="bg-logo js">
        {" "}
        <code>{"og:image"}</code>
      </p>
      <p className="bg-logo ts">
        {" "}
        <code>{"og:title"}</code>
      </p>
      <p className="bg-logo db">
        {" "}
        <code>{"og:description"}</code>
      </p>
      <p className="bg-logo nodejs">
        {" "}
        <code>{"og:url"}</code>
      </p>
      <p className="bg-logo react">
        {" "}
        <code>{"og:sitename"}</code>
      </p>
      <p className="bg-logo redux">
        {" "}
        <code>{"favicon"}</code>
      </p>
      <p className="bg-logo git">
        {" "}
        <code>{"keywords"}</code>
      </p>
      <p className="bg-logo mongodb">
        {" "}
        <code>{"<img alt='' />"}</code>
      </p>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#7c3aed"
          fill-opacity="1"
          d="M0,96L13.3,96C26.7,96,53,96,80,101.3C106.7,107,133,117,160,133.3C186.7,149,213,171,240,197.3C266.7,224,293,256,320,250.7C346.7,245,373,203,400,176C426.7,149,453,139,480,112C506.7,85,533,43,560,58.7C586.7,75,613,149,640,192C666.7,235,693,245,720,234.7C746.7,224,773,192,800,176C826.7,160,853,160,880,149.3C906.7,139,933,117,960,138.7C986.7,160,1013,224,1040,224C1066.7,224,1093,160,1120,122.7C1146.7,85,1173,75,1200,106.7C1226.7,139,1253,213,1280,208C1306.7,203,1333,117,1360,80C1386.7,43,1413,53,1427,58.7L1440,64L1440,320L1426.7,320C1413.3,320,1387,320,1360,320C1333.3,320,1307,320,1280,320C1253.3,320,1227,320,1200,320C1173.3,320,1147,320,1120,320C1093.3,320,1067,320,1040,320C1013.3,320,987,320,960,320C933.3,320,907,320,880,320C853.3,320,827,320,800,320C773.3,320,747,320,720,320C693.3,320,667,320,640,320C613.3,320,587,320,560,320C533.3,320,507,320,480,320C453.3,320,427,320,400,320C373.3,320,347,320,320,320C293.3,320,267,320,240,320C213.3,320,187,320,160,320C133.3,320,107,320,80,320C53.3,320,27,320,13,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Landing;
