import React, { Component } from 'react'

export default class Unmounting extends Component {
    componentWillUnmount() {
        console.log("This component will unmount from the dom");
        alert("This component will unmount")
    }
  render() {
    return (
      <div>
       unmount
      </div>
    )
  }
}
