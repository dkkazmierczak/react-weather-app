import React from "react"
import FormatDay from "../FormatDay"

import "./Heading.css"

const Heading = props => {
  const date = new Date(props.weatherData.currentDate)
  const result = date.toLocaleString("pl-PL", {
    hourCycle: "h24",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  })
  return (
    <div className="Heading">
      <h1>{props.weatherData.city}</h1>
      <span className="today-date">
        <FormatDay currentDate={props.weatherData.currentDate} />, {result}
      </span>
      <div className="temp-heading">
        <img
          src="http://openweathermap.org/img/wn/10d@2x.png"
          alt={props.weatherData.description}
          width="100px"
        />
        <span className="temperature">
          {Math.round(props.weatherData.temperature)}{" "}
          <span className="units">°C</span>
        </span>
      </div>
    </div>
  )
}
export default Heading
