import React from 'react'
import Header from '../../components/Header'
import Options from '../../components/Options'
import Form from '../../components/Form'
import { HomeContainer } from './styles'
import { v4 } from 'uuid'

interface Props {}

interface State {
  options: Array<{ id: string; value: string }>
  selectedOption: string
}

class Home extends React.Component<Props, State> {
  constructor(props) {
    super(props)
    this.handleMakeDecision = this.handleMakeDecision.bind(this)
    this.handleAddOption = this.handleAddOption.bind(this)
    this.handleDeleteOption = this.handleDeleteOption.bind(this)
    this.state = {
      options: [],
      selectedOption: null
    }
  }

  handleMakeDecision() {
    const randomNum = Math.floor(
      Math.random() * this.state.options.length
    ).toString()

    this.setState((prevState) => ({
      selectedOption: prevState.options[randomNum].id
    }))
  }

  async handleDeleteOption(id: string) {
    const response_id = await new Promise<string>((resolve) =>
      setTimeout(() => {
        resolve(id)
      }, 1500)
    )
    console.log(response_id)

    this.setState((prevValue) => ({
      options: prevValue.options.filter((option) => option.id !== response_id)
    }))
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
      options: [
        ...prevValue.options,
        {
          id: v4(),
          value: response
        }
      ]
    }))
  }

  componentDidUpdate(): void {
    console.log(this.state)
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
