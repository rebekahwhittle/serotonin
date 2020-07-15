// television on main page

import React from "react";
import "../styles/main.scss";
import giphy from "../assets/giphy.gif";

function television() {
  return (
    <div className="App">
      <div className="flex row atenna">
        <div className="television-atenna left"></div>
        <div className="television-atenna right"></div>
      </div>
      <div className="screen-image"></div>
      <div className="flex row television-outline">
        <div className="televsion-screen">
            {/* <img className="screen-source" src={giphy} /> */}
            {/* <canvas id="static" width="380" height="280"></canvas> */}
            {/* <Screen></Screen> */}
        </div>

        <div className="television-controls"></div>
      </div>
    </div>
  );
}

export default television;
