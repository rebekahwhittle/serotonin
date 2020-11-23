import React, { useState } from "react";
import { render } from "react-dom";
import { GiphyFetch } from "@giphy/js-fetch-api";
import { Gif, Grid, Carousel } from "@giphy/react-components";
import { useAsync } from "react-async-hook";
import "../styles/main.scss";

const giphyFetch = new GiphyFetch("sXpGFDGZs0Dv1mmNFvYaGUvYwKX0PWIh");

function GifDemo() {
  const [gif, setGif] = useState(null);
  useAsync(async () => {
    const { data } = await giphyFetch.gif("fpXxIjftmkk9y");
    setGif(data);
  }, []);
  return gif && <Gif gif={gif} width={200} />;
}

function CarouselDemo() {
  const fetchGifs = (offset) =>
    giphyFetch.search("bts", { offset, limit: 3 });

  return <Carousel fetchGifs={fetchGifs} gifHeight={200} gutter={2} />;
}

function giphy() {

  return (
    <div className="App">
      <GifDemo />
    </div>
  );
}

export default giphy;
