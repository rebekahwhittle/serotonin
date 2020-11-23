import React, { useState } from "react";
import { render } from "react-dom";
import { GiphyFetch } from "@giphy/js-fetch-api";
import { Gif, Grid, Carousel } from "@giphy/react-components";
import { useAsync } from "react-async-hook";
import "../styles/main.scss";

// set key for fetch
const giphyFetch = new GiphyFetch("sXpGFDGZs0Dv1mmNFvYaGUvYwKX0PWIh");

// define offsetN for carousel call
function getRandomOffset(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
let offsetN = getRandomOffset(1000);

// carousel for Gif set of 1
function CarouselDemo() {
  const fetchGifs = (offset) =>
    giphyFetch.search("cute animals", { offset: offsetN, limit: 1 });
  return <Carousel fetchGifs={fetchGifs} gifHeight={200} gutter={2} />;
}

function giphy() {

  return (
    <div className="App">
      <CarouselDemo />
    </div>
  );
}

export default giphy;
