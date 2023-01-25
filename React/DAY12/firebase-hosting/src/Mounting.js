import React from 'react'

export default class Mounting extends React.Component {
  // Call 1
  constructor(props) {
    super(props);
    this.state = {
      favColor: "blue",
      name: "John"
    }
  }

  // Call 2
  // used to update the local state based on the input
  static getDerivedStateFromProps(props,state) {
    if(props.name !== state.name) {
      return {
        name: props.name
      }
    }
    return null // no change in state
  } 

  // 4 it gets called after the component has rendered
  componentDidMount() {
    console.log("Running after component render")
    setTimeout(()=> {
      this.setState({favColor: "Green"})
    },2000)
  }
  render() {
    // 3 call
    return (
      <h1>Hey! My Name is {this.state.name} and my fav color is {this.state.favColor}</h1>
    )
  }
}
