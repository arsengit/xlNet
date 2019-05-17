import * as React from "react"
import { Link } from "gatsby"
import "../styles/header.css"
import Modal from "./Modal"
import DataPicker from "./dataPicker"
import { Animated } from "./animated"
const logo = require("../images/home/logo.png")

export interface HeaderProps {}

export interface HeaderState {
  toggleMenu: boolean
  background: boolean
  height: boolean
  show: boolean
  hamburger: boolean
}

class Header extends React.Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props)
    this.state = {
      toggleMenu: false,
      background: true,
      height: false,
      show: false,
      hamburger: false,
    }
  }

  closeModal = () => {
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

  onResize = () => {
    const small = window.innerWidth <= 800
    {
      this.setState(
        state =>
          state.hamburger === small
            ? null
            : {
                hamburger: small,
              },
        () => console.log(this.state.hamburger)
      )
    }
  }

  menuToggle = () => {
    this.setState({
      toggleMenu: true,
    })
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
    if (window.innerWidth <= 800) {
      this.setState({
        hamburger: true,
      })
    }
    addEventListener("scroll", this.handleScroll)
    addEventListener("resize", this.onResize)
  }

  componentWillUnmount() {
    removeEventListener("scroll", this.handleScroll)
    removeEventListener("resize", this.onResize)
  }

  render() {
    const { show, hamburger, toggleMenu } = this.state
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
          {hamburger && <button onClick={this.menuToggle}>Open Nav bar</button>}
          <Animated
            from={
              this.state.toggleMenu
                ? { opacity: 0, transform: "translateY(-10%)" }
                : { opacity: 0 }
            }
            to={
              this.state.toggleMenu
                ? { opacity: 1, transform: "translateY(100%)" }
                : { opacity: 1 }
            }
            inverse={this.state.hamburger}
          >
            {style =>
              toggleMenu ? (
                <ul style={style} className={hamburger ? "hamburger" : ""}>
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
              ) : null
            }
          </Animated>
        </header>

        <Modal onClose={this.closeModal} show={show}>
          {show ? <DataPicker show={show} /> : null}
        </Modal>
      </div>
    )
  }
}

export default Header
