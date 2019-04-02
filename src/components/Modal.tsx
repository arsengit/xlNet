import * as React from "react"
import TimePicker from "./timePicker"

export interface ModalProps {
  show: boolean
  onClose: any
}

export interface ModalState {
  fadeIn: boolean
}

class Modal extends React.Component<ModalProps, ModalState> {
  state = {
    fadeIn: false,
  }

  componentDidUpdate(prevProps: ModalProps, prevState: ModalState) {
    if (prevProps.show === false && this.props.show === true) {
      document.body.style.overflow = "hidden"
      ;(document.querySelector("main") as HTMLElement).style.filter =
        "blur(2px)"
      requestAnimationFrame(() => this.setState({ fadeIn: true }))
    }
  }

  onClose = () => {
    this.setState({ fadeIn: false }, () => setTimeout(this.props.onClose, 300))
    document.body.style.overflowY = "auto"
    ;(document.querySelector("main") as HTMLElement).style.filter = "unset"
  }

  render() {
    const { show } = this.props
    return (
      <div
        onClick={this.onClose}
        style={{
          opacity: this.state.fadeIn ? 1 : 0,
          transition: "opacity 0.2s ease-out",
        }}
      >
        {show ? (
          <div className="backdrop">
            <div
              onClick={e => e.stopPropagation()}
              className="modal"
              style={{
                transform: `scale(${this.state.fadeIn ? 1 : 0.3})`,
              }}
            >
              <h2>Free consultation with Lorem Ipsum</h2>
              <strong className="modal-desc">
                At this call, we will spend some time to understand your
                problems and define if we are a good fit to solve them
              </strong>
              <div className="flex-between date-content">
                {this.props.children}
                <TimePicker />
              </div>
            </div>
          </div>
        ) : null}
      </div>
    )
  }
}

export default Modal
