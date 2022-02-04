import React from "react"
import WeatherInfoBottomSmallDevices from "./WeatherInfoBottomSmallDevices"

import "../WeatherInfo.scss"

const WeatherInfoBottom = props => {
  return (
    <div className="WeatherInfoBottom d-md-none">
      <div className="WeatherInfo">
        <WeatherInfoBottomSmallDevices weatherData={props.weatherData} />
      </div>
    </div>
  )
}

export default WeatherInfoBottom
