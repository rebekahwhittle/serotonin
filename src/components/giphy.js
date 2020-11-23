import React from "react";
import { render } from "react-dom";
import { GiphyFetch } from "@giphy/js-fetch-api";
import { Gif, Grid, Carousel } from "@giphy/react-components";
import "../styles/main.scss";

const giphyFetch = new GiphyFetch("sXpGFDGZs0Dv1mmNFvYaGUvYwKX0PWIh");

function CarouselDemo() {
  const fetchGifs = (offset) =>
    giphyFetch.search("bts", { offset, limit: 3 });

  return <Carousel fetchGifs={fetchGifs} gifHeight={200} gutter={2} />;
}

function giphy() {

  return (
    <div className="App">
      <CarouselDemo />
      <div className="flex row television-outline"></div>

    </div>
  );
}

export default giphy;
