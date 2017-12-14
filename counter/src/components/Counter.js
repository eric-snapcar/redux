import React, { Component } from 'react'

class Counter extends Component {
  render() {
    // const { value, onIncrement, onDecrement } = this.props
    return (
    <div>
      <p>
        {this.props.value}
      </p>
      <p>
      <button onClick={this.props.onDecrement}>
        -
      </button>
        <button onClick={this.props.onIncrement}>
          +
        </button>
      </p>
    </div>
    )
  }
}

export default Counter
