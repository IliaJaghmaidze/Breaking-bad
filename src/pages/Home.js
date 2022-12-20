import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../redux/characterSlice";

function Home() {
  const character = useSelector((state) => state.character.value);
  const status = useSelector((state) => state.character.status);
  const list = useSelector((state) => state.character.list);
  const [items, setNew] = React.useState(["A", "B", "C"]);
  const dispatch = useDispatch();
  console.log(status);
  console.log(list);
  const handleClick = (event, key) => {
    console.log(event.target);
    console.log("key index: ", key);
  };
  return (
    <div className="App">
      <h1>{character}</h1>
      {items.map((item) => (
        <button key={item.toString()} onClick={() => dispatch(increment(item))}>
          {item}
        </button>
        // <button onClick={(event) => handleClick(event, key)} key={key}>
        //   {item}
        // </button>
      ))}
      <Button>sHE</Button>
    </div>
  );
}

export default Home;
