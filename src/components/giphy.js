import React, { useState } from "react";
import { render } from "react-dom";
import { GiphyFetch } from "@giphy/js-fetch-api";
import { Gif, Grid, Carousel } from "@giphy/react-components";
import { useAsync } from "react-async-hook";
import "../styles/main.scss";

// set key for fetch
const gf = new GiphyFetch("sXpGFDGZs0Dv1mmNFvYaGUvYwKX0PWIh");

const carousel = async () => {
  let strings = ["cute animals", "kittens", "puppies", "bts", "taylor swift"]; 
  let inputs = strings[Math.floor(Math.random() * strings.length)];

  try {
    const gifs = await gf.search(inputs, { limit: 1 });
    console.log(`carousel`, gifs);
  } catch (error) {
    console.error(`carousel`, error);
  }
};

// carousel();

function giphy() {
  return (
    <div className="App">
      <button onClick={carousel}>click me!</button>
    </div>
  );
}

export default giphy;
