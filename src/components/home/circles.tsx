import * as React from 'react';
import CircularProgressbar from "react-circular-progressbar"
import { Spring } from "react-spring/renderprops"

export interface CirclesProps {
    details: {
        name: string
        value: number
    }
}

 
export interface CirclesState {
    
}
 
class Circles extends React.Component<CirclesProps, CirclesState> {
    state = { 

      }
    render() { 
        const {name, value} = this.props.details
        return ( 
            <div className="pulse">
            <Spring
      from={{ value: 0, number: 0 }}
      to={{ value: 100, number: value }}
      config={{ duration: 750, delay: 3000 }}
    >
      {props => (
        <CircularProgressbar
          initialAnimation={true}
          strokeWidth={3}
          percentage={100}
          text={`${props.number.toFixed()}`}
          styles={{
            path: { stroke: `rgba(162,203,253, ${props.value / 100})` },
            text: { fill: "#000", fontSize: "16px" },
            transition: "stroke-dashoffset 0.5s ease 0s",
          }}
        />
      )}
    </Spring>
    <strong>{name}</strong>
      </div>
         );
    }
}
 

export default Circles;