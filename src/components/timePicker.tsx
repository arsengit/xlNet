import * as React from "react"
import ModalInput from "./modalInput"

export interface TimePickerProps {
  current: (e: React.SyntheticEvent) => void
}

export interface TimePickerState {
  active: string
}
const timeInputs = [
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
]

class TimePicker extends React.Component<TimePickerProps, TimePickerState> {
  state = {
    active: "",
  }

  activeInput = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const { id }: any = e.target
    this.setState({
      active: id,
    });
  }
  render() {
    const { active } = this.state
    return (
      <div className="modal-inputs">
        {timeInputs.map((time, id) => (
          <ModalInput
            setActive={this.activeInput}
            current={this.props.current}
            key={id}
            id={id}
            currentActive={active}
            details={time}
          />
        ))}
      </div>
    )
  }
}

export default TimePicker
