import { Component } from 'react'
import Header from '../../components/Header'
import Options from './components/Options'
import SendMessage from './components/SendMessage'
import OptionModal from './components/OptionModal'

interface Props {}

interface State {
  options: Array<{ id: string; value: string; createdAt: string }>
  selectedOption: string
  showModal: boolean
}

class Home extends Component<Props, State> {
  state = {
    options: [],
    selectedOption: null,
    showModal: false
  }

  handleMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length)

    this.setState((prevState) => ({
      selectedOption: prevState.options[randomNum].value,
      showModal: true
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
          id: crypto.randomUUID(),
          value: response,
          createdAt: new Date().toISOString()
        }
      ]
    }))
  }

  handleDeleteALLOption = () => {
    this.setState({
      options: []
    })
  }

  render() {
    return (
      <main className="pageContainer">
        <Header
          title="Indecision app"
          subtitle="Put your life in the hands of a computer"
        />
        <div className="widget">
          <button
            className="big_button"
            disabled={!this.state.options.length}
            onClick={this.handleMakeDecision}
          >
            What should i do?
          </button>
          <div className="widget_header">
            <span>Your options</span>
            <button
              className="link_button"
              onClick={this.handleDeleteALLOption}
            >
              Remove all
            </button>
          </div>
          <Options
            onDelete={this.handleDeleteOption}
            options={this.state.options}
          />
          <SendMessage onSubmit={this.handleAddOption} />
          {this.state.showModal && (
            <OptionModal
              option={this.state.selectedOption}
              onClose={() => this.setState({ showModal: false })}
            />
          )}
        </div>
      </main>
    )
  }
}

export default Home
