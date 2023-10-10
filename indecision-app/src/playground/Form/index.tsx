import React from 'react'

interface State {
  username: string
  loading: boolean
}

interface Props {
  onSubmit: (value: { username: string }) => Promise<void>
}

class Form extends React.Component<Props, State> {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)

    this.state = {
      username: '',
      loading: false
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    const { username } = event.target
    this.setState((prevValue) => ({ ...prevValue, loading: true }))

    this.props.onSubmit({ username: username.value }).finally(() => {
      this.setState(() => ({ username: '', loading: false }))
    })
  }

  render(): React.ReactNode {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            name="username"
            value={this.state.username}
            onChange={(event) =>
              this.setState((prevValue) => ({
                ...prevValue,
                username: event.target.value
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
