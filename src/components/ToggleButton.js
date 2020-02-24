import React from "react";
import "./ToggleButton.css";

const toggleButton = props => {
  return (
    <div className="hamburger" onClick={props.toggle}>
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>
  );
};

export default toggleButton;
