import { React, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Card from "../components/Card";
import Row from "react-bootstrap/Row";
import Dataset from "../data/csvjson.json";
import { useSelector } from "react-redux";
function BreakingBad() {
  const [newCards, setNewCards] = useState([]);
  useEffect(() => {
    setNewCards(Dataset);
  }, []);
  const list = useSelector((state) => state.character.list);

  return (
    <Container>
      <Row className=" gap-y-7">
        {newCards.map((card, index) => {
          const currentCharId = card.char_id;
          return (
            <Card
              key={index}
              {...card}
              individual={card}
              conditional={list.some((item) => item.char_id === currentCharId)}
            />
          );
        })}
      </Row>
    </Container>
  );
}

export default BreakingBad;
