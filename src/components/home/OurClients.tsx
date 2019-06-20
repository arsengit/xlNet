import * as React from "react"
import Img from "../image"
import "react-circular-progressbar/dist/styles.css"
import Circles from "./progressCircle"

export interface ClientsProps { }

export interface ClientsState { }

class Clients extends React.Component<ClientsProps, ClientsState> {
  state = {}

  render()
  {
    return (
      <section className="container clients-main">
        <h2>Our Clients</h2>
        <h3 className="section-info">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </h3>
        <span>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum is simply dummy text of the printing
          and typesetting industry.
        </span>
        <Circles />
        <div className="workers-main">
          <p>
            {" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry.
          </p>
          <div className="workers-img">
            <Img image="workers" />
          </div>
        </div>
      </section>
    )
  }
}

export default Clients
