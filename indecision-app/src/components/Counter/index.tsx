import React from 'react'

interface State {
  count: number
}

class Counter extends React.Component<{ message?: string }, State> {
  constructor(props) {
    super(props)
    this.addOne = this.addOne.bind(this)
    this.removeOne = this.removeOne.bind(this)
    this.resetCount = this.resetCount.bind(this)

    this.state = {
      count: 0
    }
  }

  addOne() {
    this.setState((prevValue) => ({
      count: prevValue.count + 1
    }))
  }

  removeOne() {
    this.setState((prevValue) => ({
      count: prevValue.count - 1
    }))
  }

  resetCount() {
    this.setState({
      count: 0
    })
  }

  render() {
    return (
      <div>
        <p>Counter {this.state.count}</p>
        <button onClick={this.addOne}>add one</button>
        <button onClick={this.removeOne}>remove one</button>
        <button onClick={this.resetCount}>reset</button>
      </div>
    )
  }
}

export default Counter
