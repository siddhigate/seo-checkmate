import React from "react";
import './index.css'

const Checklist = ({ title, checklistData }) => {
  
  return (
    <div className="main-container">
      <h1>{title}</h1>
      <div className="underline"></div>

      {Object.keys(checklistData).map((key) => {
        return (
          <div className="list-element" key = {Math.random()}>
            <h2>{key}</h2>
            <div className="sub-heading-underline"></div>
            {checklistData[key].map(item => {
              return (
                <div className="list-card" key = {Math.random()}>
                  <input type='checkbox'/>
                  <span>{item}</span>
                </div>
              )
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Checklist;
