import React, { Component } from "react";

export default class BuggyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(({ counter }) => ({
      counter: counter + 1,
    }));
  }
  render() {
    if (this.state.counter === 5) {
      // Stimulate a JS error
      throw new Error("Component Crashed");
    }
    return (
      <div>
        <h1 onClick={this.handleClick}>{this.state.counter}</h1>
      </div>
    );
  }
}
