import React, { useState } from "react";
import Heart from "react-heart";
import "../Heart/Heart.css";

function Hearticon() {
  const [active, setActive] = useState(false);
  return (
    <div style={{ width: "2rem" }}>
      <Heart
        isActive={active}
        onClick={() => setActive(!active)}
        animationScale={1.2}
        animationTrigger="both"
        animationDuration={0.2}
        className={`customHeart${active ? " active" : ""}`}
      />
    </div>
  );
}

export default Hearticon;
