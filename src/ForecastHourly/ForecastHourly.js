import React from "react"
import FormatHours from "../FormatHours"
import WeatherIcon from "../WeatherIcon/WeatherIcon"

import "./ForecastHourly.css"

const ForecastHourly = props => {
  let forecastHourly = props.forecastHourly
  return (
    <div className="ForecastHourly">
      <div className="table-heading">
        <span role="img" aria-label="clock">
          🕜
        </span>
        <span className="heading-text">HOURLY FORECAST</span>
      </div>
      <div className="table-responsive">
        <table className="table">
          <tbody>
            <tr>
              {forecastHourly.map((hour, index) => {
                if (index < 26) {
                  return (
                    <td className="time" key={index}>
                      <FormatHours date={hour.dt} timezone={props.timezone} />
                    </td>
                  )
                }
                return null
              })}
            </tr>
            <tr>
              {forecastHourly.map((hour, index) => {
                if (index < 26) {
                  return (
                    <td className="weather-icon" key={index}>
                      <WeatherIcon
                        icon={hour.weather[0].icon}
                        iconID={hour.weather[0].id}
                        className="small-icon"
                      />
                    </td>
                  )
                }
                return null
              })}
            </tr>
            <tr>
              {forecastHourly.map((hour, index) => {
                if (index < 26) {
                  return (
                    <td className="temperature" key={index}>
                      {Math.round(hour.temp)}°
                    </td>
                  )
                }
                return null
              })}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ForecastHourly
