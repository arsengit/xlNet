import * as React from "react"
import "react-dates/initialize"
import { SingleDatePicker } from "react-dates"
import "react-dates/lib/css/_datepicker.css"
import moment from "moment"

export interface PickTimeProps {}

export interface PickTimeState {
  date: moment.Moment | null
  focused: boolean | null
}

class PickTime extends React.Component<PickTimeProps, PickTimeState> {
  state = { date: moment(), focused: false }
  render() {
    return (
      <div>
        <SingleDatePicker
          date={this.state.date} // momentPropTypes.momentObj or null
          onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
          focused={this.state.focused} // PropTypes.bool
          onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
          id="pick_time" // PropTypes.string.isRequired,
          withPortal
          numberOfMonths={1}
          daySize={26}
          renderCalendarInfo={() => <div>asdasda</div>}
          calendarInfoPosition="after"
          hideKeyboardShortcutsPanel
        />
      </div>
    )
  }
}

export default PickTime
