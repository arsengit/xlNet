import * as React from "react"
import { Spring } from "react-spring/renderprops"

export interface ModalInputProps {
  details: {
    time: string
  }
  current: (e: React.SyntheticEvent) => void
  setActive: (e: React.SyntheticEvent) => void
  id: number
  currentActive: string | null
}

export interface ModalInputState {}

class ModalInput extends React.Component<ModalInputProps, ModalInputState> {
  state = {}

  render() {
    const { time } = this.props.details
    const { setActive, id, currentActive } = this.props

    return (
      <>
        {`${id}` === currentActive ? (
          <Spring from={{ opacity: 0}} to={{ opacity: 1 }}>
            {props => (
              <div style={props} className="current-input">
                <input
                  className="selected-input"
                  readOnly
                  id={`${id}`}
                  onClick={setActive}
                  value={time}
                  type="text"
                />
                <button value="email" onClick={this.props.current}>
                  Confirm
                </button>
              </div>
            )}
          </Spring>
        ) : (
          <div className="current-input">
            <input
              readOnly
              id={`${id}`}
              onClick={setActive}
              value={time}
              type="text"
            />
          </div>
        )}
      </>
    )
  }
}

export default ModalInput
