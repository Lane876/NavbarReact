import React from "react";
import "./Toolbar.css";
import ToggleButton from "./ToggleButton";

const toolbar = props => {
  return (
    <header className="toolbar">
      <div className="logo">
        <a href="/">The Logo</a>
      </div>
      <div className="spacer"></div>
      <nav>
        <div className="nav-links">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <ToggleButton toggle={props.toggle} />
    </header>
  );
};

export default toolbar;
