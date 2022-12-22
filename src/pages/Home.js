import React from "react";
import Wallpaper from "../assets/wallpaper.png";

function Home() {
  return (
    <div className="image-container">
      <img src={Wallpaper} className="wallpaper-img" />
    </div>
  );
}

export default Home;
