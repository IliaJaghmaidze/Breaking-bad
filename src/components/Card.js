import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Heart from "./Heart/Heart";

function Character({ name, occupation, img, status, nickname, category }) {
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
          <Heart />
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
