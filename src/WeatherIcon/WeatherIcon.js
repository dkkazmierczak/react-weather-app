import React from "react"

import "./css/weather-icons-wind.css"
import "./css/weather-icons-wind.min.css"
import "./css/weather-icons.css"
import "./css/weather-icons.min.css"

const WeatherIcon = props => {
  const codeMapping = {
    801: "day-sunny-overcast",
    802: "day-cloudy",
    803: "day-cloudy",
    804: "cloudy",
  }
  return <i className={`wi wi-${codeMapping[props.icon]}`}></i>
}

export default WeatherIcon
