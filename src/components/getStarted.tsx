import * as React from "react"

export interface GetStartedProps {}

export interface GetStartedState {}

class GetStarted extends React.Component<GetStartedProps, GetStartedState> {
  state = {}
  render() {
    return <button className="get-started">Get Started</button>
  }
}

export default GetStarted
