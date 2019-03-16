import * as React from 'react';
import { Link } from "gatsby"
import "../styles/header.css"
const logo = require("../images/home/logo.png")

interface IProps {
  siteTitle?: string
}
const Header: React.FunctionComponent<IProps> = ({ siteTitle = "" }) => (
 
  <div className="header-main"> <header className="container">
  
  <a href="#"><img src={logo} alt="logo"/></a>
  <ul>
    <Link to="/">Development</Link>
    <Link to="/">Pricing</Link>
    <Link to="/">Career</Link>
    <Link to="/">Contact</Link>
  </ul>
</header></div>
)


export default Header
