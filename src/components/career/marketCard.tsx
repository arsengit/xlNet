import * as React from "react"

export interface CardProps
{
  details: {
    location: string
    name: string
    time: string
  }
}

const Card: React.FunctionComponent<CardProps> = (props) =>
{
  const { location, name, time } = props.details
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

export default Card
