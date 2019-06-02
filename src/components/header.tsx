import * as React from "react"
import { Link } from "gatsby"
import "../styles/header.css"
import Modal from "./Modal"
import DataPicker from "./dataPicker"
import { Animated } from "./animated"
const logo = require("../images/home/logo.png")

export interface HeaderProps { }

export interface HeaderState
{
  showNav: boolean
  background: boolean
  height: boolean
  showModal: boolean
  hamburger: boolean
  inverseAnimation: any
}

class Header extends React.Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps)
  {
    super(props)
    this.state = {
      inverseAnimation: false,
      showNav: false,
      background: true,
      height: false,
      showModal: false,
      hamburger: false,
    }
  }
  private _timeOutId: number | any

  componentDidMount()
  {
    this.setState({
      showNav: window.innerWidth > 900,
      hamburger: window.innerWidth <= 900,
    });
    const location = window.location.pathname
    if (location == "/")
    {
      this.setState({
        background: !this.state.background,
      })
    }
    if (location == "/" && this.state.height === true)
    {
      this.setState({
        background: true,
      })
    }
    addEventListener("scroll", this.handleScroll)
    addEventListener("resize", this.onResize)
  }

  componentWillUnmount()
  {
    if (this._timeOutId)
    {
      clearTimeout(this._timeOutId);
    }
    removeEventListener("scroll", this.handleScroll)
    removeEventListener("resize", this.onResize)
  }

  render()
  {
    console.log(this.state.showNav)
    const { showModal, hamburger, showNav, background, inverseAnimation } = this.state
    return (
      <div className="header-main ">
        <div className={background ? "header-main-bg" : "header-main-bg head-opacity"
        }
        />

        <header className="container">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          {hamburger && <button onClick={this.menuToggle}>Open</button>}

          {
            showNav &&
            <Animated
              from={
                hamburger ? { transform: "translateY(-100%)" } : { opacity: 0 }
              }
              to={
                hamburger ? { transform: "translateY(93%)" } : { opacity: 1 }
              }
              inverse={inverseAnimation}

            >

              {style => (
                <ul style={style} className={hamburger ? "hamburger" : "navWithout"}>
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
              )
              }
            </Animated>
          }
        </header>

        <Modal onClose={this.toggleShow} show={showModal}>
          {showModal ? <DataPicker show={showModal} /> : null}
        </Modal>
      </div>
    )
  }

  toggleShow = (e: React.SyntheticEvent) =>
  {
    this.setState({
      showModal: !this.state.showModal,
    })
  }

  handleScroll = () =>
  {
    const docHeight = document.body.scrollHeight
    const scrollHeight = window.scrollY
    const diff = document.body.scrollHeight - window.innerHeight
    const main = diff + scrollHeight
    if (main + 150 >= docHeight)
    {
      this.setState({
        height: true,
      })
    } else
    {
      this.setState({
        height: false,
      })
    }
    this.changeActive()
  }

  onResize = () =>
  {
    const small = window.innerWidth <= 900;
    {
      this.setState(
        state =>
          state.hamburger === small
            ? null
            : {
              hamburger: small,
              showNav: !small
            }, () => console.log(this.state.hamburger, this.state.showNav)
      )
    }
  }

  menuToggle = () =>
  {
    if (this.state.showNav)
    {
      this.setState({
        inverseAnimation: !this.state.inverseAnimation
      }, () =>
        {
          if (this._timeOutId)
          {
            clearTimeout(this._timeOutId)
          }
          if (this.state.inverseAnimation)
          {
            this._timeOutId = setTimeout(() =>
            {
              this.setState({
                showNav: false,
                inverseAnimation: false
              })
            }, 700)
          }

        })

    } else
    {
      this.setState({
        showNav: !this.state.showNav
      }
      );
    }

  }

  changeActive = () =>
  {
    const location = window.location.pathname
    if (location == "/" && this.state.height === true)
    {
      this.setState({
        background: true,
      })
    } else if (location == "/" && this.state.height === false)
    {
      this.setState({
        background: false,
      })
    }
  }
}

export default Header
