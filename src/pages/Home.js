import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../redux/characterSlice";

function Home() {
  const character = useSelector((state) => state.character.value);
  const status = useSelector((state) => state.character.status);
  const list = useSelector((state) => state.character.list);
  const [items, setNew] = React.useState(["1", "2", "3"]);
  const dispatch = useDispatch();
  console.log(status);
  console.log(list);
  return (
    <div className="App">
      <h1>{character}</h1>
      {items.map((item) => (
        <button onClick={() => dispatch(increment())}>{item}</button>
      ))}
      <Button>sHE</Button>
    </div>
  );
}

export default Home;
