import * as React from "react"
import TimePicker from "./timePicker"
import ReserveEmail from "./home/ReserveEmail"
import Confirmed from "./home/Confirmed"

export interface ModalProps {
  show: boolean
  onClose: any
}

export interface ModalState {
  fadeIn: boolean
  currentComponent: string
}

class Modal extends React.Component<ModalProps, ModalState> {
  state = {
    fadeIn: false,
    currentComponent: "",
  }

  toggleShow = (e: React.SyntheticEvent) => {
    const { value }: any = e.currentTarget
    this.setState({
      currentComponent: value,
    })
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
    const { currentComponent } = this.state
    const { show } = this.props
    return (
      <div
       
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
            <span onClick={this.onClose} className="closeBtn"><i className="icon-close"></i></span>
              {currentComponent === "email" ? (
                <ReserveEmail current={this.toggleShow} />
              ) : currentComponent === "scheduled" ? (
                <Confirmed current={this.toggleShow} />
              ) : (
                <>
                  <h2>Free consultation with Lorem Ipsum</h2>
                  <strong className="modal-desc">
                    At this call, we will spend some time to understand your
                    problems and define if we are a good fit to solve them
                  </strong>
                  <div className="flex-between date-content">
                    {this.props.children}
                    <TimePicker current={this.toggleShow} />
                  </div>
                </>
              )}
            </div>
          </div>
        ) : null}
      </div>
    )
  }
}

export default Modal
