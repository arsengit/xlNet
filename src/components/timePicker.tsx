import * as React from "react"
import ModalInput from "./modalInput"

export interface TimePickerProps {
  current: (e: React.SyntheticEvent) => void
}

export interface TimePickerState {}

class TimePicker extends React.Component<TimePickerProps, TimePickerState> {
  state = {
    timeInputs: [
      {
        time: "10:00",
      },
      {
        time: "10:30",
      },
      {
        time: "11:00",
      },
      {
        time: "11:30",
      },
      {
        time: "12:00",
      },
      {
        time: "12:30",
      },
      {
        time: "13:00",
      },
      {
        time: "13:30",
      },
      {
        time: "14:00",
      },
      {
        time: "14:30",
      },
      {
        time: "15:00",
      },
      {
        time: "15:30",
      },
      {
        time: "16:00",
      },
      {
        time: "16:30",
      },
      {
        time: "17:00",
      },
      {
        time: "17:30",
      },
      {
        time: "18:00",
      },
      {
        time: "18:30",
      },
      {
        time: "19:00",
      },
    ],
  }
  render() {
    return (
      <div className="modal-inputs">
        {this.state.timeInputs.map((time, id) => (
          <ModalInput current={this.props.current} key={id} details={time} />
        ))}
      </div>
    )
  }
}

export default TimePicker
