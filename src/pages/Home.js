import React from "react";
import Wallpaper from "../assets/wallpaper.png";
import background from "../assets/background.jpg";
import Jesse from "../assets/jesse.PNG";
import Walter from "../assets/walter.PNG";
import Hank from "../assets/hank.PNG";
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
          <img src={Walter} className="featured walter" />

          <img src={Jesse} className="featured jesse" />
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
      <div className="favourites">
        <div className="featured-description">
          Browse through cards and add your favourite characters in your
          favourites list
        </div>
        <div className="featured-favourite">
          <img src={Hank} className="featured hank" />
        </div>
      </div>
    </Container>
  );
}

export default Home;
