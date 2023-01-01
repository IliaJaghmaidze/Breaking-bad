import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Heart from "react-heart";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../redux/characterSlice";
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
  const list = useSelector((state) => state.character.list);
  const condition = useSelector((state) => state.character.condition);
  const dispatch = useDispatch();
  console.log(list);
  const [active, setActive] = useState(conditional);
  const help = (item) => {
    setActive(!active);
    console.log("clicked");
    dispatch(increment(item));
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
          <div style={{ width: "2rem" }}>
            <Heart
              isActive={active}
              onClick={() => help(individual)}
              animationScale={1.2}
              animationTrigger="both"
              animationDuration={0.2}
              className={`customHeart${active ? " active" : ""}`}
            />
          </div>
        </span>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
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
