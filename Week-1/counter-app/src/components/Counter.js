import React, { Component } from "react";
import Button from "./Button";
import Count from "./Count";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.Add_1 = this.Add_1.bind(this);
    this.Decrement_1 = this.Decrement_1.bind(this);
  }

  Add_1() {
    this.setState((prevState) => {
      return { count: prevState.count + 3 };
    });
  }

  Decrement_1() {
    if (this.state.count > 0) {
      this.setState((prevState) => {
        return { count: prevState.count - 3 };
      });
    }
  }

  render() {
    const buttonFunctions = {
      increment: this.Add_1,
      decrement: this.Decrement_1,
    };

    const feedback =
      this.state.count > 10 ? "It's higher than 10!" : "Keep counting...";

    return (
      <div>
        <Count value={this.state.count} />
        <h1>{feedback}</h1>
        <Button functions={buttonFunctions} />
      </div>
    );
  }
}

export default Counter;
