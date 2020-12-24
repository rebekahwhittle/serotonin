import React, { useState } from "react";
import { render } from "react-dom";
import { GiphyFetch } from "@giphy/js-fetch-api";
import { Gif, Grid, Carousel } from "@giphy/react-components";
import { useAsync } from "react-async-hook";
import "../styles/main.scss";

const giphyFetch = new GiphyFetch("sXpGFDGZs0Dv1mmNFvYaGUvYwKX0PWIh");

// define offsetN for carousel call
function getRandomOffset(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
let offsetN = getRandomOffset(500);

// define offsetN for carousel call
function fetchGifs(offset) {
    giphyFetch.search(search, { offset: offsetN, limit: 1 })
}


function giphy() {
    return (
      <div className="App">
        <CarouselDemo />
      </div>

    );
  }

export default fetchGifs;
