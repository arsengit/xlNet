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
  show: boolean
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
      show: false,
      hamburger: false,
    }
  }
  private _timeOutId: number | any
  closeModal = () =>
  {
    this.setState({
      show: !this.state.show,
    })
  }

  toggleShow = (e: React.SyntheticEvent) =>
  {
    e.preventDefault()
    this.setState({
      show: !this.state.show,
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
            }
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
    const { show, hamburger, showNav, background, inverseAnimation } = this.state
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
            showNav ?
              <Animated
                from={
                  showNav && hamburger ? { transform: "translateY(-100%)" } :
                    { opacity: 0 }
                }
                to={
                  showNav && hamburger ? { transform: "translateY(93%)" }
                    : { opacity: 1 }
                }
                inverse={inverseAnimation}

              >

                {style => (
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
                )
                }
              </Animated> : null

          }
        </header>

        <Modal onClose={this.closeModal} show={show}>
          {show ? <DataPicker show={show} /> : null}
        </Modal>
      </div>
    )
  }
}

export default Header
