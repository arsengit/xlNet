import * as React from 'react';
import { Link } from "gatsby"
import "../styles/header.css"
const logo = require("../images/home/logo.png")

interface IProps {
  siteTitle?: string
}
const Header: React.FunctionComponent<IProps> = ({ siteTitle = "" }) => (
 
  <div className="header-main"> <header className="container">
   <Link to="/"><img src={logo} alt="logo"/></Link>
 
  <ul>
    <Link to="/">Development</Link>
    <Link to="/pricing">Pricing</Link>
    <Link to="/career">Career</Link>
    <Link to="/contact">Contact</Link>
    <button>Pick a Time</button>
  </ul>
</header></div>
)


export default Header
