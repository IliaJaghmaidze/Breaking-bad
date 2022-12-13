import { React, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Card from "../components/Card";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";
import Dataset from "../data/csvjson.json";

function BreakingBad() {
  const [newCards, setNewCards] = useState([]);
  useEffect(() => {
    setNewCards(Dataset);
  }, []);

  return (
    <Container>
      <Row
        className="justify-content-md-center"
        sm={2}
        md={2}
        lg={2}
        xl={3}
        xxl={4}
      >
        {newCards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </Row>
    </Container>
  );
}

export default BreakingBad;
