import * as React from "react"
import Circles from "./circles"
export interface CircleProps {}

export interface CircleState {}

class Circle extends React.Component<CircleProps, CircleState> {
  state = {
    circles: [
      {name: "Project",
        value: 60   
    },
    {name: "Clients",
value: 70},
{name: "Team",
value: 80},
{name: "Product",
value: 90},
    ]
  }
  render() {
    return (
     
        <div className="circles">
        {
          this.state.circles.map((item, i) =><Circles details={item} key={i}/>)
        }
         
        </div>
     
    )
  }
}

export default Circle
