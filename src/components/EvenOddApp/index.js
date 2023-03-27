// Write your code here

import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0, number: 'even'}

  onIncrement = () => {
    const {count} = this.state

    const countNumber = Math.floor(Math.random() * 101)

    const numberType = count % 2 === 0 ? 'Even' : 'Odd'

    this.setState(prevState => ({
      count: prevState.count + countNumber,
      number: numberType,
    }))
  }

  render() {
    const {count, number} = this.state

    return (
      <div className="container">
        <h1 className="heading">Count {count}</h1>
        <p className="content">Count is {number}</p>
        <button type="button" className="buttons" onClick={this.onIncrement}>
          Increment
        </button>
        <p className="condition">*Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
