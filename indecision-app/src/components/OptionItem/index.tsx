import React from 'react'
import { OptionItemContainer } from './styles'
import { GoSync, GoXCircle } from 'react-icons/go'

interface State {
  loading: boolean
}

interface Props {
  option: string
  index: number
  value: number
  onDelete: (value: string) => Promise<void>
}

class OptionItem extends React.Component<Props, State> {
  constructor(props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this)

    this.state = {
      loading: false
    }
  }

  handleDelete = (option) => {
    this.setState(() => ({ loading: true }))
    this.props.onDelete(option).finally(() => {
      this.setState(() => ({ loading: false }))
    })
  }

  render(): React.ReactNode {
    return (
      <OptionItemContainer $index={this.props.index} $value={this.props.value}>
        Option {this.props.index}: {this.props.option}
        <button
          onClick={() => this.handleDelete(this.props.option)}
          disabled={this.state.loading}
        >
          {this.state.loading ? <GoSync className="icon" /> : <GoXCircle />}
        </button>
      </OptionItemContainer>
    )
  }
}

export default OptionItem
