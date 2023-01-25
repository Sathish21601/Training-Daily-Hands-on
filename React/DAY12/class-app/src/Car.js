import React from 'react'


export default class Car extends React.Component {
    constructor(props) {
        super(props)
        console.log("Component is initialized");
        console.log(props)
        this.state = {
            color: 'red',
            model: '2022',
            counter: 1,
            details: {
                Company: "Tata",
                location: "Delhi"
            }
        }
    }
    changeColor = () => {
        this.setState({color: "blue"})
        this.setState({details:{...this.state.details, location:"India"}})
    }
  render() {
    return (
        <div>
      <h1>Hi!, I am a {this.state.color} car build in {this.state.model} and the name is {this.props.name}.</h1>
      <p>{this.state.details.location}</p>
      <button onClick={() => {
        this.changeColor()
      }}>Change Color</button>
      </div>
    )
    }
}