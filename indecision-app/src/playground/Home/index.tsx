import React from 'react'
import Header from '../Header'
import List from '../List'
import Form from '../Form'

interface Props {}

interface State {
  options: Array<string>
  selectedOption: number
}

class Home extends React.Component<Props, State> {
  constructor(props) {
    super(props)
    this.handleMakeDecision = this.handleMakeDecision.bind(this)

    this.state = {
      options: [],
      selectedOption: null
    }
  }

  handleMakeDecision() {
    const randomNum = Math.random() * this.state.options.length

    this.setState((prevValue) => ({
      ...prevValue,
      selectedOption: Math.floor(randomNum)
    }))
  }

  render(): React.ReactNode {
    return (
      <div>
        <Header />
        <button
          disabled={!this.state.options.length}
          onClick={this.handleMakeDecision}
        >
          What should i do?
        </button>

        <Form
          onSubmit={async (value) => {
            const response = await new Promise<{
              username: string
            }>((resolve) =>
              setTimeout(() => {
                resolve(value)
              })
            )

            this.setState((prevValue) => ({
              ...prevValue,
              options: [...prevValue.options, response.username]
            }))
          }}
        />
        <List value={this.state.selectedOption} options={this.state.options} />
      </div>
    )
  }
}

export default Home
