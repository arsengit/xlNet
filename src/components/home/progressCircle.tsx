import * as React from "react"
import "react-circular-progressbar/dist/styles.css"
import CircularProgressbar from "react-circular-progressbar"
import { Spring } from "react-spring/renderprops"

export interface CircleProps {}

export interface CircleState {}

class Circle extends React.Component<CircleProps, CircleState> {
  state = {}
  render() {
    return (
      <div className="flex-between circles">
        <div>
          {" "}
          <Spring
            from={{ value: 0 }}
            to={{ value: 100 }}
            config={{ duration: 750, delay: 3000 }}
          >
            {props => (
              <CircularProgressbar
                initialAnimation={true}
                strokeWidth={1}
                percentage={props.value}
                text={`${props.value.toFixed()}`}
                styles={{
                  path: { stroke: `rgba(162,203,253, ${props.value / 100})` },
                  text: { fill: "#000", fontSize: "16px" },
                  transition: "stroke-dashoffset 0.5s ease 0s",
                }}
              />
            )}
          </Spring>
        </div>
        <div>
          {" "}
          <Spring
            from={{ value: 0 }}
            to={{ value: 100 }}
            config={{ duration: 750, delay: 3000 }}
          >
            {props => (
              <CircularProgressbar
                initialAnimation={true}
                strokeWidth={1}
                percentage={props.value}
                text={`${props.value.toFixed()}`}
                styles={{
                  path: { stroke: `rgba(162,203,253, ${props.value / 100})` },
                  text: { fill: "#000", fontSize: "16px" },
                  transition: "stroke-dashoffset 0.5s ease 0s",
                }}
              />
            )}
          </Spring>
        </div>
        <div>
          {" "}
          <Spring
            from={{ value: 0 }}
            to={{ value: 100 }}
            config={{ duration: 750, delay: 3000 }}
          >
            {props => (
              <CircularProgressbar
                initialAnimation={true}
                strokeWidth={1}
                percentage={props.value}
                text={`${props.value.toFixed()}`}
                styles={{
                  path: { stroke: `rgba(162,203,253, ${props.value / 100})` },
                  text: { fill: "#000", fontSize: "16px" },
                  transition: "stroke-dashoffset 0.5s ease 0s",
                }}
              />
            )}
          </Spring>
        </div>
        <div>
          {" "}
          <Spring
            from={{ value: 0 }}
            to={{ value: 100 }}
            config={{ duration: 750, delay: 3000 }}
          >
            {props => (
              <CircularProgressbar
                initialAnimation={true}
                strokeWidth={1}
                percentage={props.value}
                text={`${props.value.toFixed()}`}
                styles={{
                  path: { stroke: `rgba(162,203,253, ${props.value / 100})` },
                  text: { fill: "#000", fontSize: "16px" },
                  transition: "stroke-dashoffset 0.5s ease 0s",
                }}
              />
            )}
          </Spring>
        </div>
      </div>
    )
  }
}

export default Circle
