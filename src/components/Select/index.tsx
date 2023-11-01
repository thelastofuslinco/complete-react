import React from 'react'

interface State {
  value: any
}

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {}

class Select extends React.Component<Props, State> {
  state = { value: this.props.value || '' }

  render() {
    return (
      <select
        {...this.props}
        className={`select ${this.props.className}`}
        value={this.state.value}
        onChange={(event) => this.setState({ value: event.target.value })}
      ></select>
    )
  }
}

export default Select
