import * as React from "react"
import { Link } from "gatsby"
import "../styles/header.css"
import Modal from "./Modal"
import DataPicker from "./dataPicker"
const logo = require("../images/home/logo.png")

export interface HeaderProps {}

export interface HeaderState {
  background: boolean
  height: boolean
  show: boolean
}

class Header extends React.Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props)
    this.state = {
      background: true,
      height: false,
      show: false,
    }
  }

  closeModal = (e: React.SyntheticEvent) => {
    this.setState({
      show: !this.state.show,
    })
  }

  toggleShow = (e: React.SyntheticEvent) => {
    e.preventDefault()
    this.setState({
      show: !this.state.show,
    })
  }

  handleScroll = () => {
    const docHeight = document.body.scrollHeight
    const scrollHeight = window.scrollY
    const diff = document.body.scrollHeight - window.innerHeight
    const main = diff + scrollHeight
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

  componentWillUnmount() {
    removeEventListener("scroll", this.handleScroll)
  }

  render() {
    const { show } = this.state
    return (
      <div className="header-main ">
        <div
          className={
            this.state.background
              ? "header-main-bg"
              : "header-main-bg head-opacity"
          }
        />

        <header className="container">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>

          <ul>
            <Link activeClassName="head-active" to="/">
              Development
            </Link>
            <Link activeClassName="head-active" to="/pricing">
              Pricing
            </Link>
            <Link activeClassName="head-active" to="/career">
              Career
            </Link>
            <Link activeClassName="head-active" to="/contact">
              Contact
            </Link>
            <button onClick={this.toggleShow}>Pick a Time</button>
          </ul>
        </header>

        <Modal onClose={this.closeModal} show={show}>
          {show ? <DataPicker show={show} /> : null}
        </Modal>
      </div>
    )
  }
}

export default Header
