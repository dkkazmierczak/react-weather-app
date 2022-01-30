import React from "react"
import WeatherInfoBottomSmallDevices from "./WeatherInfoBottomSmallDevices"

import "./WeatherInfo.css"

const WeatherInfoBottom = props => {
  return (
    <div className="WeatherInfoBottom">
      <div className="WeatherInfo">
        <WeatherInfoBottomSmallDevices weatherData={props.weatherData} />
      </div>
    </div>
  )
}

export default WeatherInfoBottom
