import React from "react";
import "../App.css";
import Header from "../Components/Header";
import Meme from "../Components/Meme";
import Login from "./Login";

export default function Homepage() {
  return (
    <div className="App">
      <Header />
      <Meme />
    </div>
  );
}
