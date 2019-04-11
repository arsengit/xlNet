import * as React from "react"
import Img from "../image"
import { Link } from "gatsby"
import "../../styles/home/whoWe.css"
export interface WhoWeAreProps {}

const WhoWeAre: React.FunctionComponent<WhoWeAreProps> = () => {
  return (
    <section className="container whoWe-main">
      <h2>Who We Are</h2>
      <div className="flex-between whoWe-content">
        <div className="light">
          <Img image="light" />
        </div>
        <div className="whoWe-text">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages
          </p>
          <Link to="/contact">Contact Us</Link>
        </div>
      </div>
    </section>
  )
}

export default WhoWeAre
