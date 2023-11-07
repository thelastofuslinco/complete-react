import { Component } from 'react'

interface State {
  value: string | number | readonly string[]
}

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

class Input extends Component<Props, State> {
  state = { value: this.props.value || '' }

  render() {
    return (
      <input
        {...this.props}
        className={`input ${this.props.className}`}
        value={this.state.value}
        onChange={(event) => this.setState({ value: event.target.value })}
      />
    )
  }
}

export default Input
