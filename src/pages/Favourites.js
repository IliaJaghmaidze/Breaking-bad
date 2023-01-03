import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import Card from "../components/Card";
import Row from "react-bootstrap/Row";

function Favourites() {
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
        {list.map((card, char_id) => (
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

export default Favourites;
