import React, { Component } from 'react'

export default class Classprops extends Component {
  render() {
    return (
      <div>

        <p>{this.props.fname}</p>
        <p>{this.props.lname}</p>
        <p>{this.props.city}</p>
      </div>
    )
  }
}
