import React from "react";
import Wallpaper from "../assets/wallpaper.png";
import background from "../assets/background.jpg";
import Jesse from "../assets/jesse.PNG";
import Walter from "../assets/walter.PNG";
import { Container } from "react-bootstrap";
function Home() {
  return (
    <Container>
      <div className="welcome">
        <img src={Wallpaper} className="wallpaper-img" alt="wallpaper" />
        <div class="center">
          Welcome to Breaking Bad & Better Call Saul Character Wiki
        </div>
      </div>
      <div className="about">
        <img src={background} className="background-img" alt="wallpaper" />
        <div className="cards-container">
          <img src={Walter} className="walter-card" />
          <img src={Jesse} className="jesse-card" />
        </div>
        <div className="description">
          <h2>Select your cards</h2>
        </div>
      </div>
      <div className="favourites"></div>
    </Container>
  );
}

export default Home;
