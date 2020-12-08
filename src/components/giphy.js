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
let offsetN = getRandomOffset(500);

// carousel for Gif set of 1
function CarouselDemo() {
  // define array of search terms for giphyFetch 
  let strings = ["cute animals", "kittens", "puppies", "bts", "taylor swift"]; 
  let search = strings[Math.floor(Math.random() * strings.length)];

  // function handleClick(e) {
  //   if (e.keyCode === 32) {
  //     e.preventDefault();
  //     console.log('spacebar');
  //   }
  // }
  // handleClick();
  // on spacebar click fetchGifs sould run onClick => fetchGifs();
  // if event equals spacebar (32) then run fetch
  const fetchGifs = (offset) =>
    giphyFetch.search(search, { offset: offsetN, limit: 1 });
  return <Carousel fetchGifs={fetchGifs} gifHeight={500} gutter={2} />;
}

function giphy() {
  return (
    <div className="App">
      <CarouselDemo />
    </div>
  );
}

export default giphy;
