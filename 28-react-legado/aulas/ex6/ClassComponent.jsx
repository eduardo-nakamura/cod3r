import React, { Component } from 'react'

export default class ClassComponent extends Component {
  render() {
    return (
      <div>
        <p>{this.props.value}</p>
      </div>
    )
  }
}
