import * as React from "react"

export interface ReserveEmailProps {
  current: (e: React.SyntheticEvent) => void
}

export interface ReserveEmailState {}

const inputs = [
  {
    span: "Full Name*",
    name: "name",
  },
  {
    span: "Your e-mail address*",
    name: "email",
  },
  {
    span: "Your website/app/business/message:*",
    name: "about",
  },
]

class ReserveEmail extends React.Component<
  ReserveEmailProps,
  ReserveEmailState
> {
  state = {
    name: "",
    email: "",
    about: "",
    message: "",
  }

  handleChange = (e: React.SyntheticEvent) => {
    e.preventDefault()
    const { name, value }: any = e.currentTarget
    this.setState(
      {
        [name]: value,
      },
      () => console.log(this.state)
    )
  }

  render() {
    return (
      <>
        <button className="backBtn" value="" onClick={this.props.current}>
          <i className="icon-left-arrow" />
        </button>
        <div className="reserve-mail-main">
          <div className="resize-left">
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industryLorem Ipsum is simply dummy text of the printing and
              typesetting industryLorem Ipsum is simply dummy text of the
              printing and typesetting industryLorem Ipsum is simply dummy text
              of the printing and typesetting industryLorem Ipsum is simply
              dummy text of the printing and typesetting industryLorem Ipsum is
              simply dummy text of the printing and typesetting industry
            </span>
            <span>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industryLorem Ipsum is simply dummy text of the printing and
              typesetting industryLorem Ipsum is simply dummy text of the
              printing and typesetting industryLorem Ipsum is simply dummy text
              of the printing and typesetting industryLorem Ipsum is simply
              dummy text of the printing and typesetting industryLorem Ipsum is
              simply dummy text of the printing and typesetting industry
            </span>
          </div>
          <div className="reserve-right">
            {inputs.map((item, index) => (
              <div className="reserve-inputs" key={index}>
                <span>{item.span}</span>
                <input
                  onChange={this.handleChange}
                  name={item.name}
                  type="text"
                />
              </div>
            ))}
            <div className="reserve-inputs">
              <span>Message</span>
              <textarea name="message" onChange={this.handleChange} rows={6} />
            </div>
            <button value="scheduled" onClick={this.props.current}>
              Schedule Event
            </button>
          </div>
        </div>
      </>
    )
  }
}

export default ReserveEmail
