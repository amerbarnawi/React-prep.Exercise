import React, { useState } from "react";
import Button from "./Button";
import Count from "./Count";

function Counter() {
  const [count, setCount] = useState(() => {
    return 0;
  });
  const feedback = count > 10 ? "It's higher than 10!" : "Keep counting...";

  function Add_1() {
    setCount(count + 1);
  }

  function Decrement_1() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  const buttonFunctions = {
    increment: Add_1,
    decrement: Decrement_1,
  };
  return (
    <div>
      <Count value={count} />
      <h1>{feedback}</h1>
      <Button functions={buttonFunctions} />
    </div>
  );
}

export default Counter;
