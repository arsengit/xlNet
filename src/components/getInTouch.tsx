import * as React from "react"
import "../styles/getIn.css"

export interface ContactProps {}

export interface ContactState {
  fullName?: string 
  mail?: string
  phone?: string
  message?: string
  companyMail?: string
}

class Contact extends React.Component<ContactProps, ContactState> {
  state : ContactState = {
    fullName: "",
    mail: "",
    phone: "",
    message: "",
    companyMail: ""
  }

  handleChange = (e: React.SyntheticEvent) => {
    const { name, value } : any= e.currentTarget
    this.setState(
      {
       [name]: value
      }
    )
  }

  render() {
    return (
      <section className="get-main">
        <h2>Get in touch</h2>
        <div className="container">
          <div className="flex-between get-content">
            <div className="get-form">
              <form>
                <h4>Send a Message</h4>
                <div className="flex-between">
                  <input
                    type="text"
                    onChange={this.handleChange}
                    name="fullName"
                    placeholder="Name*"
                  />
                  <input
                    type="text"
                    onChange={this.handleChange}
                    name="mail"
                    placeholder="E-mail*"
                  />
                </div>
                <div className="flex-between">
                  <input
                    type="text"
                    onChange={this.handleChange}
                    name="phone"
                    placeholder="Phone number"
                  />
                  <input
                    type="text"
                    onChange={this.handleChange}
                    name="companyMail"
                    placeholder="Company E-mail"
                  />
                </div>
                <span>Message*</span>
                <textarea
                  onChange={this.handleChange}
                  name="message"
                  rows={10}
                />
                <div className="flex-between privacy">
                  <div>
                    <strong>by clicking you agree to our</strong>
                    <a href="#">privacy policy</a>
                  </div>

                  <button>Send</button>
                </div>
              </form>
            </div>
            <div className="get-in-contact">
              <div className="get-in">
              <h4>Contact</h4>
              <span>Phone number</span>
              <strong>+(916)111 1111</strong>
              <span>E-main</span>
              <strong>info@xlent.tech</strong>
              <span>Mailing address</span>
              <strong>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has{" "}
              </strong>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Contact
