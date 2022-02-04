import React from "react"

import "./WeatherInfo.scss"

const MinMaxTemperature = props => {
  return (
    <div className="MinMaxTemperature">
      <ul>
        <li>
          <div className="max-temp">
            Max : {Math.round(props.weatherData.maxTemp * 10) / 10} °C
          </div>
        </li>
        <li>
          <div className="min-temp">
            Min : {Math.round(props.weatherData.minTemp * 10) / 10} °C
          </div>
        </li>
      </ul>
    </div>
  )
}

export default MinMaxTemperature
