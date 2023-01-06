import React from "react";
import Wallpaper from "../assets/wallpaper.png";
import background from "../assets/background.jpg";
import Jesse from "../assets/jesse.PNG";
import Walter from "../assets/walter.PNG";
import { Container, Row, Col, Button } from "react-bootstrap";
import BreakingBad from "./BreakingBad";
function Home() {
  return (
    <Container fluid="xl">
      <div className="welcome">
        <img src={Wallpaper} className="wallpaper-img" alt="wallpaper" />
        <div class="center">
          Welcome to Breaking Bad & Better Call Saul Character Wiki
        </div>
      </div>
      <div className="about">
        <div className="featured-cards">
          <img src={Walter} className="walter-card" />

          <img src={Jesse} className="jesse-card" />
        </div>

        <div className="description">
          <h2>
            This website allows you to view character information in card format
          </h2>
          <Button variant="dark" href="/breakingbad" className="browse-button">
            Browse Cards
          </Button>
        </div>
      </div>
      <div className="favourites"></div>
    </Container>
  );
}

export default Home;
