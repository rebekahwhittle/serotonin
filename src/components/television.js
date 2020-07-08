// television on main page

import React from "react";
import "../styles/main.scss";

function television() {
  return (
    <div className="App">
        <div className="flex column television-outline">
            <div className="televsion-screen"></div>
            <div className="television-controls"></div>

        </div>
    </div>
  );
}

export default television;
