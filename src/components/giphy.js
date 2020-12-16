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


  const handleKeyPress = (offset) => 
    // console.log("hello world");
    
    giphyFetch.search(search, 
      { offset: offsetN, limit: 1 });

  
    

    return (
      <div className="App">
        {/* <button onClick={handleKeyPress}>
            Click me!
        </button> */}
        <Carousel fetchGifs={handleKeyPress} gifHeight={500} gutter={2} />
      </div>
    );
}

function giphy() {
  return (
    <div className="App">
      <CarouselDemo />
    </div>
  );
}

export default giphy;
