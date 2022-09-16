import React, { useState } from "react";
import Button from "./Button";

function Counter() {
  const [count, setCount] = useState(0);
  const feedback = count > 10 ? "It's higher than 10!" : "Keep counting...";

  function Add1() {
    setCount(count + 1);
  }
  return (
    <div>
      <h1>{count}</h1>
      <h1>{feedback}</h1>
      {Button(Add1)}
    </div>
  );
}

export default Counter;
