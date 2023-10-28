import React from 'react'
import { GoSync, GoXCircle } from 'react-icons/go'

interface State {
  loading: boolean
}

interface Props {
  option: { id: string; value: string }
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
      <div className={'optionItemContainer'}>
        <span>{this.props.option.value}</span>
        <button
          onClick={() => this.handleDelete(this.props.option.id)}
          disabled={this.state.loading}
        >
          {this.state.loading ? (
            <GoSync className="animation" />
          ) : (
            <GoXCircle />
          )}
        </button>
      </div>
    )
  }
}

export default OptionItem
