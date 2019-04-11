import * as React from "react"

const logo = require("../../images/home/Logo.png")

export interface ConfirmedProps {
  current: (e: React.SyntheticEvent) => void
}

const Confirmed: React.FunctionComponent<ConfirmedProps> = props => {
  return (
    <div className="confirmed-main">
      <button className="backBtn" value="email" onClick={props.current}>
        <i className="icon-left-arrow" />
      </button>
      <h2>Confirmed</h2>
      <h3>Lorem Ipsum</h3>
      <img src={logo} alt="Xlent" />
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industryLorem Ipsum is simply dummy text of the printing and typesetting
        industryLorem Ipsum is simply dummy text of the printing and typesetting
        industryLorem Ipsum is simply dummy text of the printing and typesetting
        industryLorem Ipsum is simply dummy text of the printing and typesetting
        industryLorem Ipsum is simply dummy text of the printing and typesetting
        industry
      </p>
    </div>
  )
}

export default Confirmed
