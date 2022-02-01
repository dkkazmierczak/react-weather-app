import React from "react"
import WeatherIcon from "../WeatherIcon/WeatherIcon"
import FormatHours from "../FormatHours"

import "./WeatherInfo.css"

const SunTime = props => {
  return (
    <div className="SunTime">
      <ul className="sun">
        <li>
          <WeatherIcon className="small-icon" icon="sunrise" />{" "}
          <span className="sunrise">
            Sunrise :{" "}
            <FormatHours
              date={props.weatherData.sunrise}
              timezone={props.weatherData.timezone}
            />
          </span>
        </li>
        <li>
          <WeatherIcon className="small-icon" icon="sunset" />{" "}
          <span className="sunset">
            Sunset :{" "}
            <FormatHours
              date={props.weatherData.sunset}
              timezone={props.weatherData.timezone}
            />
          </span>
        </li>
      </ul>
    </div>
  )
}

export default SunTime
