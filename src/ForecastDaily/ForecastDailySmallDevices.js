import React from "react"
import FormatDay from "../FormatDay"
import WeatherIcon from "../WeatherIcon/WeatherIcon"

import "./ForecastDaily.css"

const ForecastDailySmallDevices = props => {
  let forecastDaily = props.forecastDaily
  return (
    <div className="ForecastDailySmallDevices d-lg-none">
      <div className="table-heading">
        <span role="img" aria-label="calendar">
          📅
        </span>{" "}
        <span className="heading-text">7-DAY FORECAST</span>
      </div>
      <table className="table">
        {forecastDaily.map(function (day, index) {
          if ((index > 0) & (index < 8)) {
            return (
              <tbody key={index}>
                <tr>
                  <th className="day">
                    <FormatDay date={day.dt} />
                  </th>
                  <td className="min-temp">{Math.round(day.temp.min)}°</td>
                  <td className="weather-icon">
                    <WeatherIcon
                      iconID={day.weather[0].id}
                      icon={day.weather[0].icon}
                      className="small-icon"
                    />
                  </td>
                  <td className="max-temp">{Math.round(day.temp.max)}°</td>
                </tr>
              </tbody>
            )
          }
          return null
        })}
      </table>
    </div>
  )
}

export default ForecastDailySmallDevices
