import { createPortal } from 'react-dom'
import React from 'react'
import { GoX } from 'react-icons/go'

class Modal extends React.Component<{ children; onClose }> {
  componentDidMount(): void {
    document.body.style.overflow = 'hidden'
  }
  componentWillUnmount(): void {
    document.body.style.overflow = null
  }

  render() {
    return createPortal(
      <>
        <div onClick={this.props.onClose} className="modal_container"></div>
        <div className="modal_panel">
          <div className="close">
            <GoX onClick={this.props.onClose} className="icon" />
          </div>
          {this.props.children}
        </div>
      </>,
      document.querySelector('.modal-container')
    )
  }
}

export default Modal
