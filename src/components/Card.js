import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Heart from "react-heart";
import { useDispatch } from "react-redux";
import { addFavourite } from "../redux/characterSlice";
function Character({
  name,
  occupation,
  img,
  status,
  nickname,
  category,
  individual,
  conditional,
}) {
  const dispatch = useDispatch();
  const [active, setActive] = useState(conditional);
  const handleClick = (item) => {
    setActive(!conditional);
    dispatch(addFavourite(item));
  };
  return (
    <Col xxl={3} lg={4} gap={3} sm={6} xs={6}>
      <Card
        border={status === "Alive" ? "success" : "danger"}
        style={{ maxWidth: "18rem" }}
      >
        <Card.Img variant="top" src={img} className="card-picture" />
        <span
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            marginLeft: "auto",
            marginRight: "5px",
          }}
        >
          <div title="Favourite" style={{ width: "2rem" }}>
            <Heart
              isActive={conditional}
              onClick={() => handleClick(individual)}
              animationScale={1.2}
              animationTrigger="both"
              animationDuration={0.2}
              className={`customHeart${active ? " active" : ""}`}
            />
          </div>
        </span>
        <Card.Header className="header">
          <b>{name}</b>
        </Card.Header>

        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>
            Known as: <b>{nickname}</b>
          </Card.Text>
          <Card.Text>
            Occupation: <b>{occupation}</b>
          </Card.Text>
          <Card.Text>Show: {category}</Card.Text>
          <Card.Text>
            Status:{" "}
            <span className={`tag ${status === "Alive" ? "green" : "red"}`}>
              {status}
            </span>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Character;
