import React from "react";
import pic from "../Images/meme-pic.png";

export default function Header() {
  return (
    <header className="header">
      <img src={pic} className="header-image" />
      <h2 className="header-title">MemeGenerator</h2>
      <h4 className="header-project">React course - Project 3</h4>
    </header>
  );
}
