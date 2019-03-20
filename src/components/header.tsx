import * as React from "react"
import { Link } from "gatsby"
import "../styles/header.css"
import { throws } from "assert"
const logo = require("../images/home/logo.png")

export interface HeaderProps {}

export interface HeaderState {
  background: boolean
  height: boolean
}

class Header extends React.Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props)
    this.state = {
      background: true,
      height: false,
    }
  }

  handleScroll = () => {
 
    const height = window.scrollY
    if (height >= 800) {
      this.setState({
        height: true,
      })
    }else {
      this.setState({
        height: false
      })
    }
    this.changeActive()
    console.log(this.state.height)
  }

  changeActive = () => {
    const location = window.location.pathname
    if (location == "/" && this.state.height === true) {
      this.setState({
        background: true,
      })
    }else if (location == "/" && this.state.height === false){
      this.setState({
        background: false
      })
    }
  }

  componentDidMount() {
    const location = window.location.pathname
    if (location == "/") {
      this.setState({
        background: !this.state.background,
      })
    }
    if (location == "/" && this.state.height === true) {
      this.setState({
        background: true,
      })
    }
    addEventListener("scroll", this.handleScroll)
  }

  componentWillMount() {
    removeEventListener
  }

  render() {
    return (
      <div
        className={
          this.state.background ? "header-main header-main-bg" : "header-main"
        }
      >
        {" "}
        <header className="container">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>

          <ul>
            <Link to="/">Development</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/career">Career</Link>
            <Link to="/contact">Contact</Link>
            <button>Pick a Time</button>
          </ul>
        </header>
      </div>
    )
  }
}

export default Header
