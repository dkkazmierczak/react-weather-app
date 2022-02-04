import React from "react"
import FormatDay from "../FormatDay"
import FormatHours from "../FormatHours"
import WeatherIcon from "../WeatherIcon/WeatherIcon"

import "./Heading.scss"

const Heading = props => {
  const daymonth = new Date(props.weatherData.date * 1000)
  const result = daymonth.toLocaleString("pl-PL", {
    month: "2-digit",
    day: "2-digit",
  })
  return (
    <div className="Heading">
      <h1>{props.weatherData.city}</h1>
      <span className="current-date">
        <FormatDay date={props.weatherData.date} />, {result},{" "}
        <FormatHours
          date={props.weatherData.date}
          timezone={props.weatherData.timezone}
        />
      </span>
      <div>
        <span className="heading-icon">
          <WeatherIcon
            iconID={props.weatherData.iconID}
            icon={props.weatherData.icon}
            className="icon"
          />
        </span>
        <span className="temperature">
          {Math.round(props.weatherData.temperature)}{" "}
          <span className="units">°C</span>
        </span>
      </div>
    </div>
  )
}
export default Heading
