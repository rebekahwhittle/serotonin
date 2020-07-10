// television on main page

import React from "react";
import "../styles/main.scss";

function television() {
  return (
    <div className="App">
        <div className="flex row atenna">
            <div className="television-atenna left"></div>
            <div className="television-atenna right"></div>
        </div>
        <div className="flex row television-outline">
            <div className="televsion-screen"></div>
            <div className="television-controls"></div>

        </div>
    </div>
  );
}

export default television;
