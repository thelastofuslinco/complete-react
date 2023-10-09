import React from 'react'

interface State {
  username: string
  email: string
  loading: boolean
}

interface Props {
  onSubmit: (value: { username: string; email: string }) => Promise<void>
}

class Form extends React.Component<Props, State> {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      username: '',
      email: '',
      loading: false
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    const { username, email } = event.target
    this.setState((prevValue) => ({ ...prevValue, loading: true }))

    this.props
      .onSubmit({ username: username.value, email: email.value })
      .finally(() => {
        this.setState(() => ({ username: '', email: '', loading: false }))
      })
  }

  render(): React.ReactNode {
    console.log(this.state)

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            disabled={this.state.loading}
            name="username"
            value={this.state.username}
            onChange={(event) =>
              this.setState((prevValue) => ({
                ...prevValue,
                username: event.target.value
              }))
            }
          />
          <input
            disabled={this.state.loading}
            name="email"
            value={this.state.email}
            onChange={(event) =>
              this.setState((prevValue) => ({
                ...prevValue,
                email: event.target.value
              }))
            }
          />
          <button disabled={this.state.loading} type="submit">
            send
          </button>
        </form>
      </div>
    )
  }
}

export default Form
