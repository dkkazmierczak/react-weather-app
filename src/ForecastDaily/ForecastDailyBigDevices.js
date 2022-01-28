import React from "react"
import FormatDay from "../FormatDay"
import WeatherIcon from "../WeatherIcon/WeatherIcon"

import "./ForecastDaily.css"

const ForecastDailyBigDevices = props => {
  let forecastDaily = props.forecastDaily
  return (
    <div className="ForecastDailyBigDevices d-none d-lg-block">
      <div className="row">
        {forecastDaily.map(function (day, index) {
          if ((index > 0) & (index < 6)) {
            return (
              <div className="col-2 wrapper" key={index}>
                <ul>
                  <li className="day">
                    <FormatDay date={day.dt} />
                  </li>
                  <li className="weather-icon">
                    <WeatherIcon
                      iconID={day.weather[0].id}
                      icon={day.weather[0].icon}
                      className="icon"
                    />
                  </li>
                  <li className="temperatures">
                    <div className="row">
                      <div className="col-4 min-temp">
                        {Math.round(day.temp.min)}°
                      </div>
                      <div className="col-4">{Math.round(day.temp.max)}°</div>
                    </div>
                  </li>
                </ul>
              </div>
            )
          }
        })}
      </div>
    </div>
  )
}

export default ForecastDailyBigDevices
