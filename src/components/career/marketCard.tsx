import * as React from "react"

export interface CardProps {
  details: {
    location: string
    name: string
    time: string
  }
}

export interface CardState {}

class Card extends React.Component<CardProps, CardState> {
  state = {}
  render() {
    const { location, name, time } = this.props.details
    return (
      <div className="card-body">
        <div className="card-item">
          <strong>{name}</strong>
          <span>{time}</span>
          <span className="card-location">
            <i className="icon-location">{location}</i>
          </span>
        </div>
        <div className="card-apply">
          <button>Apply</button>
        </div>
      </div>
    )
  }
}

export default Card
