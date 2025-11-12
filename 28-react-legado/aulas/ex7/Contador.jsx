import React, { Component } from 'react'

export default class ClassComponent extends Component {
    constructor(props) {
        super(props)
        this.state = { value: props.initialValue}
    }

    soma(delta) {
        this.setState({ value: this.state.value + delta})
    }

    render() {
        return (
            <div>
                <h1>{this.props.label}</h1>
                <p>{this.state.value}</p>
                <button onClick={() => this.soma(-1)}>-</button>
                <button onClick={() => this.soma(1)}>+</button>
            </div>
        )
    }
}