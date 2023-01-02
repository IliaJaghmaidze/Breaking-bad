import { React, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Card from "../components/Card";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";
import Dataset from "../data/csvjson.json";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
function BreakingBad() {
  const [newCards, setNewCards] = useState([]);
  useEffect(() => {
    setNewCards(Dataset);
  }, []);
  const list = useSelector((state) => state.character.list);

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
        {newCards.map((card, char_id) => (
          <Card
            key={char_id}
            {...card}
            individual={card}
            conditional={list.includes(card) ? true : false}
          />
        ))}
      </Row>
    </Container>
  );
}

export default BreakingBad;
