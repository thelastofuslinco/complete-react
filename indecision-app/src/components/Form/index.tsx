import React from 'react'
import { FormContainer } from './styles'

interface State {
  loading: boolean
  error: Error
}
interface Props {
  onSubmit: (value: string) => Promise<void>
}

class Form extends React.Component<Props, State> {
  constructor(props) {
    super(props)

    this.state = {
      loading: false,
      error: null
    }
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

  render(): React.ReactNode {
    return (
      <FormContainer
        onSubmit={this.handleSubmit}
        $error={!!this.state.error?.message}
      >
        {this.state.error?.message && <span>{this.state.error?.message}</span>}
        <input name="text" />
        <button type="submit">send</button>
      </FormContainer>
    )
  }
}

export default Form
