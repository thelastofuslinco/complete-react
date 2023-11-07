import { Component } from 'react'

interface State {
  loading: boolean
  error: Error
}
interface Props {
  onSubmit: (value: string) => Promise<void>
}

class SendMessage extends Component<Props, State> {
  state = {
    loading: false,
    error: null
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const { text } = event.target
    this.setState({ loading: true })

    this.props
      .onSubmit(text.value.trim())
      .then(() => {
        text.value = ''
        this.setState({ loading: false, error: null })
      })
      .catch((error: Error) => this.setState({ loading: false, error }))
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={'form_container'}>
        {this.state.error?.message && <span>{this.state.error?.message}</span>}
        <input name="text" className={this.state.error && 'error'} />
        <button type="submit">send</button>
      </form>
    )
  }
}

export default SendMessage
