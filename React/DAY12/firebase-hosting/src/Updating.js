import React, { Component } from "react";
import Unmounting from "./Unmounting";

export default class Updating extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favColor: "blue",
      name: "john",
    };
  }

  //return wheteher the component should update with the props or state change
  shouldComponentUpdate() {
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("div1").innerHTML =
      "The value before update was:" + prevState.favColor;
    return null;
  }

  componentDidUpdate() {
    document.getElementById("div2").innerHTML =
    "The value after update is:" + this.state.favColor;
  }

  changeColor = () => {
    this.setState({
      favColor: "red",
    });
  };
  hideComponent = () => {
    this.setState({
        show: false
    })
  }
  render() {
    let unmounting;
    if(this.state.show) {
        unmounting = <Unmounting />
    }
    return (
      <div>
        <h1>
          My fav color is {this.state.favColor} <br />
          <button onClick={this.changeColor}>Change Color</button>
          <div id="div1"></div>
          <div id="div2"></div>
          {unmounting}
          <button onClick={this.hideComponent}>Unmount Component</button>
        </h1>
      </div>
    );
  }
}
