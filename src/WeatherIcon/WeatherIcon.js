import React from "react"

import "./WeatherIcon.css"
import "./css/weather-icons-wind.css"
import "./css/weather-icons-wind.min.css"
import "./css/weather-icons.css"
import "./css/weather-icons.min.css"

import { codeMapping } from "./codeMapping"

const WeatherIcon = props => {
  return (
    <span
      className={`WeatherIcon ${
        (props.icon === "01d" || props.icon === "01n") && "rotate"
      }`}>
      <i
        className={`wi ${
          codeMapping[props.iconID] || codeMapping[props.icon]
        } ${props.className}`}></i>
    </span>
  )
}

export default WeatherIcon
