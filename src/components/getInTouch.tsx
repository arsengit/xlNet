import * as React from "react"
import "../styles/getIn.css"

export interface ContactProps {}

export interface ContactState {}

class Contact extends React.Component<ContactProps, ContactState> {
  state = {}
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
                  <input type="text" placeholder="Name*" />
                  <input type="text" placeholder="E-mail*" />
                </div>
                <div className="flex-between">
                  <input type="text" placeholder="Phone number" />
                  <input type="text" placeholder="Company E-mail" />
                </div>
                <span>Message*</span>
                <textarea rows="10" />
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
              <h4>Contact</h4>
              <span>Phone number</span>
              <strong>+(916)111 1111</strong>
              <span>E-main</span>
              <strong>info@xlent.tech</strong>
              <span>Mailing address</span>
              <strong>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has </strong>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Contact
