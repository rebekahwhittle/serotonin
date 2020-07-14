import React from "react";
import "../styles/main.scss";
import Television from "./television";

function serotonin() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <div>
            <image href="%PUBLIC_URL%/backgroundimage.png"></image>
          </div>
        </div>

        <div className="box">
          <Television />
        </div>
      </header>
    </div>
  );
}

export default serotonin;
