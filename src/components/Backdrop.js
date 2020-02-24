import React from "react";
import "./Backdrop.css";

const backdrop = props => {
  let drawerClasses = "drawer";

  if (props.show) {
    drawerClasses = "drawer open";
  }
  return (
    <div className={drawerClasses}>
      <nav className="drawer-links">
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
      </nav>
    </div>
  );
};

export default backdrop;
