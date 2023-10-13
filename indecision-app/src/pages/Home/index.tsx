import React from 'react'
import Header from '../../components/Header'
import Options from '../../components/Options'
import Form from '../../components/Form'
import { HomeContainer } from './styles'

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
    return (
      <HomeContainer>
        <Header
          title="Indecision app"
          subtitle="Put your life in the hands of a computer"
        />
        <button
          disabled={!this.state.options.length}
          onClick={this.handleMakeDecision}
        >
          What should i do?
        </button>

        <Options
          value={this.state.selectedOption}
          options={this.state.options}
        />
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
