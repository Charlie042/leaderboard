import React, { useState } from "react";
import { ProductMan } from "./ProductMan";
import { Database } from "./Database";

export const Dashboard = () => {
  const [category, setCategory] = useState();
  const [color, setColor] = useState(false)

  const handleClick = (data) => {
    setCategory(thedata => (thedata === data ? null : data));
    setColor(!color)
  };

  return (
    <>
      <header>
        <h1 className="header"> Intern Management App</h1>
        <h3>Select the path to view LeaderBoard</h3>
        <div className="buttons-container">
         
          <a href="#" className={color ? 'clicked' : ''} onClick={() => handleClick("Product-Design")}>
            Product Design
          </a>
          <a  href="#" onClick={() => handleClick("Frontend")}>Frontend</a>
          <a href="#" className={color ? 'clicked' : ''} onClick={() => handleClick("Backend")}>Backend</a>
        </div>
      </header>
      <div className="content">
        <ProductMan Section={category} Database={Database} />
      </div>
    </>
  );
};
