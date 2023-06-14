import React from "react";
import { useState } from "react";
function Card() {
  // const change=0;
  const [change, setChange] = useState(false);
  const handleClick = () => {
    // setChange(true);   only 1 time run
    setChange(!change);
    console.log(change);
  };
  return (
    <div>
      {change === false ? <h1>Card</h1> : <h1>Card changed</h1>}
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
export default Card;