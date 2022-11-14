import React from "react";

export default function Meme() {
  return (
    <div>
      <form>
        <label>
          <input className="input-fields" type="text" placeholder="Shut up" />
        </label>
        <label>
          <input
            className="input-fields"
            type="text"
            placeholder="and take my money"
          />
        </label>
        <input className="Button" type="submit" value="Get a new meme image" />
      </form>
    </div>
  );
}
