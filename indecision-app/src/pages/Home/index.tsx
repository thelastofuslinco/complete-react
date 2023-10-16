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
    this.handleAddOption = this.handleAddOption.bind(this)

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

  async handleDeleteOption(option) {
    const response = await new Promise<{
      username: string
    }>((resolve) =>
      setTimeout(() => {
        resolve(option)
      }, 1500)
    )

    console.log(response)
  }

  async handleAddOption(value: string) {
    const response = await new Promise<string>((resolve, reject) =>
      setTimeout(() => {
        if (value === '') {
          reject(new Error('Write some message'))
        }
        resolve(value)
      })
    )

    this.setState((prevValue) => ({
      ...prevValue,
      options: [...prevValue.options, response]
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
          onDelete={this.handleDeleteOption}
          value={this.state.selectedOption}
          options={this.state.options}
        />
        <Form onSubmit={this.handleAddOption} />
      </HomeContainer>
    )
  }
}

export default Home
