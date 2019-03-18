import * as React from "react"
import Img from "../image"
import { Spring } from "react-spring/renderprops"
import "../../styles/home/ourClients.css"
import "react-circular-progressbar/dist/styles.css"
import Circles from "./progressCircle"

export interface ClientsProps {}

export interface ClientsState {}

class Clients extends React.Component<ClientsProps, ClientsState> {
  state = {}

  render() {
    return (
      <section className="container clients-main">
        <h2>Our Clients</h2>
        <h3>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </h3>
       
        <Circles/>
      </section>
    )
  }
}

export default Clients
