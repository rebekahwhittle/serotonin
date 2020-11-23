import React from "react";
import "../styles/main.scss";
import Giphy from "./giphy";

function serotonin() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <div>
            <image href="%PUBLIC_URL%/backgroundimage.png"></image>
          </div>
        </div>
          <Giphy />
        <div id="root">
        </div>
      </header>
    </div>
  );
}

export default serotonin;
