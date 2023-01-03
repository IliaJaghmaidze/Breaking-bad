import React from "react";
import Wallpaper from "../assets/wallpaper.png";

function Home() {
  return (
    <div className="image-container">
      <img src={Wallpaper} className="wallpaper-img" />
      <div class="center">
        Welcome to Breaking Bad & Better Call Saul Character Wiki
      </div>
    </div>
  );
}

export default Home;
