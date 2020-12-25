import React, { useState } from "react";
import { render } from "react-dom";
import { GiphyFetch } from "@giphy/js-fetch-api";
import { Gif, Grid, Carousel } from "@giphy/react-components";
import { useAsync } from "react-async-hook";
import "../styles/main.scss";


// set key for fetch
const gf = new GiphyFetch("sXpGFDGZs0Dv1mmNFvYaGUvYwKX0PWIh");

function giphy(aGif) {
  
  const randomGif = async () => {

    const getRandomOffset = (max) => {
      return Math.floor(Math.random() * Math.floor(max));
    }
    let offsetN = getRandomOffset(500);
  
    let strings = ["cute animals", "kittens", "puppies", "bts", "taylor swift"]; 
    let inputs = strings[Math.floor(Math.random() * strings.length)];
  
    const gifs = await gf.search(inputs, { offset: offsetN });
    aGif = gifs.data[0].images.downsized.url;
    console.log(String(aGif));

    giphy(aGif);
  
  };

  console.log(aGif);

  return (
    <div className="App">
      <button onClick={randomGif}>click me!</button>
      <div className="gify">
        <a href={aGif}>link</a>
      </div>
    </div>
  );
}




export default giphy;
