import React from 'react'
import Modal, { handleCloseModal } from '../../../../components/Modal'

interface Props {
  option: string
  onClose: () => void
}

class OptionModal extends React.Component<Props> {
  render(): React.ReactNode {
    return (
      <Modal onClose={this.props.onClose}>
        <div className="optionModal">
          <h1>Selected option</h1>
          <span>{this.props.option}</span>
          <button onClick={() => handleCloseModal(this.props.onClose)}>
            Okay
          </button>
        </div>
      </Modal>
    )
  }
}

export default OptionModal
