import * as React from "react"
import { Link } from "gatsby"
import "../styles/footer.css"
import GetStarted from "./getStarted"
export interface FooterProps {}

const Footer: React.FunctionComponent<FooterProps> = () => {
  return (
    <footer>
      <div className="container">
        <ul className="footer-nav">
          <Link to="/pricing">Pricing</Link>
          <Link to="/career">Career</Link>
          <Link to="/contact">Contact</Link>
        </ul>
        <div className="flex-between footer-icons">
          <ul>
            <a href="#">
              <i className="icon-linkedin2" />
            </a>
            <a href="#">
              <i className="icon-twitter" />
            </a>
            <a href="#">
              <i className="icon-facebook1" />
            </a>
          </ul>
          <GetStarted />
        </div>
        <div className="flex-between footer-bottom">
          <div>
            <span>2019 XLENT Technologies. All rights reserved.</span>
          </div>
          <div>
            <span>Tel: (650) 337-7781 </span>
            <span className="footer-email"> Email: info@xlent.tech</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
