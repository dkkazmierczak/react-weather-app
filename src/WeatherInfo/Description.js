import React from "react"

import "./WeatherInfo.css"

const Description = props => {
  return (
    <div className="Description">
      <ul>
        <li className="sky-description">{props.weatherData.description}</li>
        <li>
          <div className="feels-like">
            Feels like : {Math.round(props.weatherData.feelsLike * 10) / 10} °C
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Description
