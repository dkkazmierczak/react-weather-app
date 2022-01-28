import React from "react"
import FormatDay from "../FormatDay"
import WeatherIcon from "../WeatherIcon/WeatherIcon"

import "./Heading.css"

const Heading = props => {
  const date = new Date(props.weatherData.date * 1000)
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
        <FormatDay date={props.weatherData.date} />, {result}
      </span>
      <div className="temp-heading">
        <WeatherIcon
          iconID={props.weatherData.iconID}
          icon={props.weatherData.icon}
          className="icon"
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
