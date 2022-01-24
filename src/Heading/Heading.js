import React from "react"

import "./Heading.css"

const Heading = props => {
  return (
    <div className="Heading">
      <h1>
        <span className="city">{props.data.city}</span>
      </h1>
      <div className="temp-heading">
        <img
          src="http://openweathermap.org/img/wn/10d@2x.png"
          alt={props.data.description}
          className="image"
        />
        <span className="temperature">
          {Math.round(props.data.temperature)}
        </span>
        <span className="units">°C</span>
      </div>
    </div>
  )
}
export default Heading
