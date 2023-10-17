import React from 'react'
import { OptionItemContainer } from './styles'
import { GoSync, GoXCircle } from 'react-icons/go'

interface State {
  loading: boolean
}

interface Props {
  option: { id: string; value: string }
  value: string
  onDelete: (id: string) => Promise<void>
}

class OptionItem extends React.Component<Props, State> {
  state = {
    loading: false
  }

  handleDelete = (id) => {
    this.setState(() => ({ loading: true }))
    this.props.onDelete(id).finally(() => {
      this.setState(() => ({ loading: false }))
    })
  }

  render(): React.ReactNode {
    return (
      <OptionItemContainer
        $selected={this.props.option.id === this.props.value}
      >
        Option {this.props.option.id}: {this.props.option.value}
        <button
          onClick={() => this.handleDelete(this.props.option.id)}
          disabled={this.state.loading}
        >
          {this.state.loading ? <GoSync className="icon" /> : <GoXCircle />}
        </button>
      </OptionItemContainer>
    )
  }
}

export default OptionItem
