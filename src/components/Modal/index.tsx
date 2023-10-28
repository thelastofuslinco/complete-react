import { createPortal } from 'react-dom'
import React from 'react'
import { GoX } from 'react-icons/go'

interface Props {
  children: React.ReactNode
  onClose: () => void
}

export const handleCloseModal = async (onClose) => {
  document.querySelector('.modal_panel').classList.remove('active')
  await new Promise((resolve) => setTimeout(resolve, 200))
  onClose()
}

class Modal extends React.Component<Props> {
  componentDidMount(): void {
    document.body.style.overflow = 'hidden'
    setTimeout(
      () => document.querySelector('.modal_panel').classList.add('active'),
      0
    )
  }

  componentWillUnmount() {
    document.body.style.overflow = null
  }

  render() {
    return createPortal(
      <>
        <div
          onClick={() => handleCloseModal(this.props.onClose)}
          className="modal_container"
        ></div>
        <div className="modal_panel">
          <div className="close">
            <GoX
              onClick={() => handleCloseModal(this.props.onClose)}
              className="icon"
            />
          </div>
          {this.props.children}
        </div>
      </>,
      document.querySelector('.modal-container')
    )
  }
}

export default Modal
