import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "react-bootstrap";
import Card from "../components/Card";
import Row from "react-bootstrap/Row";

function Favourites() {
  const list = useSelector((state) => state.character.list);
  const results = list.filter((element) => {
    return element !== undefined;
  });

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
        {results.map((card, char_id) => (
          <Card key={char_id} {...card} />
        ))}
      </Row>
    </Container>
  );
}

export default Favourites;
