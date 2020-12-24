import React, { useState } from "react";
import { render } from "react-dom";
import { GiphyFetch } from "@giphy/js-fetch-api";
import { Gif, Grid, Carousel } from "@giphy/react-components";
import { useAsync } from "react-async-hook";
import "../styles/main.scss";


// set key for fetch
const gf = new GiphyFetch("sXpGFDGZs0Dv1mmNFvYaGUvYwKX0PWIh");


const carousel = async () => {
  const getRandomOffset = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }
  let offsetN = getRandomOffset(500);
  console.log(offsetN);


  let strings = ["cute animals", "kittens", "puppies", "bts", "taylor swift"]; 
  let inputs = strings[Math.floor(Math.random() * strings.length)];

  const gifs = await gf.search(inputs, { offset: offsetN });
  let aGif = gifs.data[0].url;
  console.log(`carousel`, aGif);

  function CarouselDemo() {
    const fetchGifs = (offset) =>
      gf.search("dogs", { offset, limit: 10 });
    return <Carousel fetchGifs={fetchGifs} gifHeight={200} gutter={6} />;
  }
};

function giphy() {
  return (
    <div className="App">
      <button onClick={carousel}>click me!</button>
      <div className="gify">
      </div>
    </div>
  );
}




export default giphy;
