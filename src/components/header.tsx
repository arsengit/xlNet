import * as React from "react"
import { Link } from "gatsby"
import "../styles/header.css"
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
    const docHeight = document.body.scrollHeight
    const scrollHeight = window.scrollY
    const diff = document.body.scrollHeight - window.innerHeight
    const main = diff + scrollHeight
    console.log(main)
    console.log(diff)
    if (main + 150 >= docHeight) {
      this.setState({
        height: true,
      })
    } else {
      this.setState({
        height: false,
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
    } else if (location == "/" && this.state.height === false) {
      this.setState({
        background: false,
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
    removeEventListener("scroll", this.handleScroll)
  }

  render() {
    return (
      
      <div
        className=
         "header-main "
        
      >
     
        <div className={this.state.background ? "header-main-bg": "header-main-bg head-opacity"}></div>
      
        <header className="container">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>

          <ul>
            <Link activeClassName="head-active" to="/">Development</Link>
            <Link activeClassName="head-active" to="/pricing">Pricing</Link>
            <Link activeClassName="head-active" to="/career">Career</Link>
            <Link activeClassName="head-active" to="/contact">Contact</Link>
            <button>Pick a Time</button>
          </ul>
        </header>
      </div>
    )
  }
}

export default Header
