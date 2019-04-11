import * as React from "react"
import Slider from "./ourProjectSlide"

export interface ProjectsProps {}

export interface ProjectsState {}

class Projects extends React.Component<ProjectsProps, ProjectsState> {
  state = {}
  render() {
    return (
      <section>
        <h2>Our Projects</h2>
        <Slider />
      </section>
    )
  }
}

export default Projects
