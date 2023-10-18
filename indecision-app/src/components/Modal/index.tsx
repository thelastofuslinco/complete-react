import { createPortal } from 'react-dom'
import React from 'react'
import { GoX } from 'react-icons/go'
import { ModalContainer, Panel } from './styles'

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
        <ModalContainer onClick={this.props.onClose}></ModalContainer>
        <Panel>
          <div className="close">
            <GoX onClick={this.props.onClose} className="icon" />
          </div>
          {this.props.children}
        </Panel>
      </>,
      document.querySelector('.modal-container')
    )
  }
}

export default Modal
