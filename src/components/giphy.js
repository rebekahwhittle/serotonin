import React, { useState } from "react";
import { render } from "react-dom";
import { GiphyFetch } from "@giphy/js-fetch-api";
import { Gif, Grid, Carousel } from "@giphy/react-components";
import { useAsync } from "react-async-hook";
import "../styles/main.scss";


// set key for fetch
const gf = new GiphyFetch("sXpGFDGZs0Dv1mmNFvYaGUvYwKX0PWIh");

let thisGif;

const randomGif = async () => {
  var aGif;

  const getRandomOffset = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  }
  let offsetN = getRandomOffset(500);

  let strings = ["cute animals", "kittens", "puppies", "bts", "taylor swift"]; 
  let inputs = strings[Math.floor(Math.random() * strings.length)];

  const gifs = await gf.search(inputs, { offset: offsetN });
  aGif = "\""+ gifs.data[0].images.downsized.url+  "\"";
  console.log(aGif);

  giphy(aGif);

};


function giphy(aGif) {
  var aGif = "https://media1.giphy.com/media/KZSU0FEIfsbis441IH/giphy-downsized.gif?cid=9f0f6425zabtehdzk94fw36gdhe4j8nrjxdc0kfpdf3diuzq&rid=giphy-downsized.gif";

  console.log(aGif);

  return (
    <div className="App">
      <button onClick={randomGif}>click me!</button>
      <div className="gify">
        <img 
            src={aGif}
            alt="a gif"
        />
      </div>
    </div>
  );
}




export default giphy;
