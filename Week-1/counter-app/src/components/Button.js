import React from "react";

function Button(props) {
  return (
    <div>
      <button onClick={props.functions.increment}>Add 1!</button>
      <button onClick={props.functions.decrement}>Decrement 1!</button>
    </div>
  );
}

export default Button;
