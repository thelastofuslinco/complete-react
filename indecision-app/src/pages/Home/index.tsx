import React from 'react'
import Header from '../../components/Header'
import List from '../../components/List'
import Form from '../../components/Form'
import { HomeContainer } from './styles'
import { Person } from '../../playground/es6_classes'

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

  render() {
    const person = new Person('Lincoln', 24)
    console.log(person.get_description)

    return (
      <HomeContainer>
        <Header />
        <button
          disabled={!this.state.options.length}
          onClick={this.handleMakeDecision}
        >
          What should i do?
        </button>

        <List value={this.state.selectedOption} options={this.state.options} />
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
      </HomeContainer>
    )
  }
}

export default Home
