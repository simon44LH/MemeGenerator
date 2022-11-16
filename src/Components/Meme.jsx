import React from "react";
import memesData from "../Data/memesData";

export default function Meme() {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/9ehk.jpg",
  });
  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function getMemeImage(e) {
    e.preventDefault();
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  return (
    <div className="meme-main">
      <form className="form" onSubmit={(e) => getMemeImage(e)}>
        <label>
          <input className="input-fields" type="text" placeholder="Top text" />
        </label>
        <label>
          <input
            className="input-fields"
            type="text"
            placeholder="Bottom text"
          />
        </label>
        <button className="Button" type="submit" value="">
          Get a new meme image
        </button>
      </form>
      <img src={meme.randomImage} className="memeImage" />
    </div>
  );
}
