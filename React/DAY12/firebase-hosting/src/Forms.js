import React, { Component } from "react";

export default class Forms extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "", framework: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeValue = this.onChangeValue.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    console.log(this.state.value)
  }

  handleSubmit(event) {
    // alert("Your favorite flavor is: " + this.state.value);
    console.log(this.state.value)
    event.preventDefault();
  }

  onChangeValue(event) {
    console.log(event.target.value);
    this.setState({frameWork:event.target.value})
  }

  render() {
    return (
        <div>
      <form onSubmit={this.handleSubmit}>
      {/*   <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option>Select</option>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label> 
        <input type="submit" value="Submit" /> <br /> <br /> */}

        <label>Name:
         <input type="text" name = "name" value={this.state.value} onChange = {this.handleChange} />
        </label>
        <input type="radio" value="React" onChange={this.onChangeValue} checked = {this.state.framework === "React"} name = "React" />
        <input type="radio" value="Angular" onChange={this.onChangeValue} checked = {this.state.framework === "Angular"} name = "language" />
        <input type="radio" value="Vue" onChange={this.onChangeValue} checked = {this.state.framework === "Vue"} name = "language" />
        <button type="submit">Submit</button>
      </form>
      </div>
    );
  }
}
