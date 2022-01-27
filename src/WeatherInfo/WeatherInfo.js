import React from "react"
import WeatherInfoSmallDevices from "./WeatherInfoSmallDevices"
import WeatherInfoBigDevices from "./WeatherInfoBigDevices"

import "./WeatherInfo.css"

const WeatherInfo = props => {
  return (
    <div className="WeatherInfo container">
      <WeatherInfoBigDevices weatherData={props.weatherData} />
      <WeatherInfoSmallDevices weatherData={props.weatherData} />
    </div>
  )
}

export default WeatherInfo
