import * as React from "react"
import "react-dates/initialize"
import { SingleDatePicker } from "react-dates"
import "react-dates/lib/css/_datepicker.css"
import moment from "moment"
import "../styles/header.css"

export interface DataPickerProps {
  show: boolean
}

export interface DataPickerState {
  date: moment.Moment | null
}

class DataPicker extends React.Component<DataPickerProps, DataPickerState> {
  state = { date: moment() }
  render() {
    return (
      <div className="data-picker-main">
        <span className="find-time">find a time to meet</span>
        <SingleDatePicker
          date={this.state.date} // momentPropTypes.momentObj or null
          onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
          focused={true} // PropTypes.bool
          onFocusChange={({ focused }) => this.setState({})} // PropTypes.func.isRequired
          id="pick_time" // PropTypes.string.isRequired,
          numberOfMonths={1}
          daySize={35}
          keepOpenOnDateSelect={true}
          calendarInfoPosition="after"
          hideKeyboardShortcutsPanel
        />
      </div>
    )
  }
}

export default DataPicker
