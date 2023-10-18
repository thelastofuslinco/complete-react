import React from 'react'
import Header from '../../components/Header'
import Options from '../../components/Options'
import Form from '../../components/Form'
import { v4 } from 'uuid'

interface Props {}

interface State {
  options: Array<{ id: string; value: string }>
  selectedOption: string
}

class Home extends React.Component<Props, State> {
  state = {
    options: [],
    selectedOption: null
  }

  handleMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length)

    this.setState((prevState) => ({
      selectedOption: prevState.options[randomNum].id
    }))
  }

  handleDeleteOption = async (id: string) => {
    const response_id = await new Promise<string>((resolve) =>
      setTimeout(() => {
        resolve(id)
      }, 1500)
    )

    this.setState((prevValue) => ({
      options: prevValue.options.filter((option) => option.id !== response_id)
    }))
  }

  handleAddOption = async (value: string) => {
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

  render() {
    return (
      <div className="homeContainer">
        <Header
          title="Indecision app"
          subtitle="Put your life in the hands of a computer"
        />

        <button
          className="big_button"
          disabled={!this.state.options.length}
          onClick={this.handleMakeDecision}
        >
          What should i do?
        </button>
        <div className="widget">
          <div className="widget_header">
            <span>Your options</span>
            <button className="link_button">Remove all</button>
          </div>
          <Options
            onDelete={this.handleDeleteOption}
            value={this.state.selectedOption}
            options={this.state.options}
          />
        </div>
        <Form onSubmit={this.handleAddOption} />
      </div>
    )
  }
}

export default Home
