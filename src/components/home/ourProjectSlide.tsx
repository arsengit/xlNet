import * as React from "react"
import Img from "../image"
import { Spring } from "react-spring/renderprops"

const arrow = require("../../images/home/arrow.png")


export interface SliderProps {}

export interface SliderState {
  images: string[]
  clicked: boolean
}

class Slider extends React.Component<SliderProps, SliderState> {
  _sliderRef: React.RefObject<HTMLDivElement> = React.createRef()

  state: SliderState = {
    images: ["slide1", "slide2", "slide3", "slide4", "slide5"],
    clicked: false,
  }

  prevImage = (e: React.SyntheticEvent) => {
    e.preventDefault()
    this.setState({
      clicked: true
    })
  
    const slider = this._sliderRef.current
    
    console.log()
    requestAnimationFrame(() => {(slider as HTMLDivElement).style.transition = "transform 0.3s ease-out";
    (slider as HTMLDivElement).style.transform = `translateX(${(slider as HTMLDivElement)
        .offsetWidth / this.state.images.length}px)`;
        (document.getElementsByClassName("gatsby-image-wrapper")[4] as HTMLDivElement).style.opacity = "1"
    })
    setTimeout(() => {
      ;(slider as HTMLDivElement).style.transition = "none"
      this.setState(
        state => ({
          images: [state.images[state.images.length - 1]].concat(
            state.images.slice(0, -1)
           
          )
          ,
          clicked: false
        }),
        () => {
          requestAnimationFrame(() => {((slider as HTMLDivElement)
              .firstChild as HTMLDivElement).style.transform =
              "translateX(-20px)";
              (document.getElementsByClassName("gatsby-image-wrapper")[4] as HTMLDivElement).style.opacity = "0"
            ;((slider as HTMLDivElement)
              .firstChild as HTMLDivElement).style.opacity = "0"
            ;((slider as HTMLDivElement)
              .firstChild as HTMLDivElement).style.transition =
              "all ease-out 0.3s"
            ;(slider as HTMLDivElement).style.transform = "translateX(0px)"
            setTimeout(() => {
              
             ( document.getElementsByClassName("gatsby-image-wrapper")[4] as HTMLDivElement).style.opacity = "1";
              ((slider as HTMLDivElement)
                .firstChild as HTMLDivElement).style.transform =
                "translateX(0px)";
                           
              ((slider as HTMLDivElement)
                .firstChild as HTMLDivElement).style.opacity = "1";
            }, 200)
          })
        }
      )
    }, 300)
  }

  nextImage = (e: React.SyntheticEvent) => {
    e.preventDefault()
    const slider = this._sliderRef.current
  this.setState({
    clicked: true
  })
    requestAnimationFrame(() => {
      (slider as HTMLDivElement).style.transition = "transform 0.3s ease-out";
      (document.getElementsByClassName("gatsby-image-wrapper")[4] as HTMLDivElement).style.opacity = "1";
      (slider as HTMLDivElement).style.transform = `translateX(${-(slider as HTMLDivElement)
        .offsetWidth / this.state.images.length}px)`;
    })
    setTimeout(() => {
      ;(slider as HTMLDivElement).style.transition = "none"
      this.setState(
        state => ({
          images: state.images.slice(1).concat([state.images[0]]),
          clicked: false
        }),
        () => {
          requestAnimationFrame(() => {
            ((slider as HTMLDivElement)
              .lastChild as HTMLDivElement).style.transform = "translateX(20px)";
            ((slider as HTMLDivElement)
              .lastChild as HTMLDivElement).style.opacity = "0";
              (document.getElementsByClassName("gatsby-image-wrapper")[4] as HTMLDivElement).style.opacity = "0";
            ((slider as HTMLDivElement)
              .lastChild as HTMLDivElement).style.transition =
              "all ease-out 0.3s"
            ;(slider as HTMLDivElement).style.transform = "translateX(0px)"
            setTimeout(() => {(document.getElementsByClassName("gatsby-image-wrapper")[4] as HTMLDivElement).style.opacity = "1"
              ;((slider as HTMLDivElement)
                .lastChild as HTMLDivElement).style.transform =
                "translateX(0px)"
              ;((slider as HTMLDivElement)
                .lastChild as HTMLDivElement).style.opacity = "1"
            }, 200)
          })
        }
      )
    }, 300)
  }

  render() {
    return (
      <div className="slide-section">
      <div className={this.state.clicked ?"iphoneImg iphoneZ": "iphoneImg"}></div>
        <button className="prevBtn" onClick={this.prevImage}>
          <img src={arrow} alt="" />
        </button>
        <div className="slider-main">
          <div
            className="slider-images"
            ref={this._sliderRef}
            style={{ overflow: "hidden" }}
          >
            {this.state.images.map((item, index) => (
              <Img image={item} key={item} />
            ))}
          </div>
        </div>
        <button className="nextBtn" onClick={this.nextImage}>
          <img src={arrow} alt="" />
        </button>
      </div>
    )
  }
}

export default Slider
