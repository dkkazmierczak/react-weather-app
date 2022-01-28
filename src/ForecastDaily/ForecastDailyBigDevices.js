import React from "react"
import FormatDay from "../FormatDay"
import WeatherIcon from "../WeatherIcon/WeatherIcon"

import "./ForecastDaily.css"

const ForecastDailyBigDevices = props => {
  return (
    <div className="ForecastDailyBigDevices d-none d-lg-block">
      <div className="row">
        <div className="col-2 wrapper">
          <ul>
            <li className="day">
              <FormatDay date={props.forecastData[0].dt} />
            </li>
            <li className="weather-icon">
              <WeatherIcon
                iconID={props.forecastData[0].weather[0].id}
                icon={props.forecastData[0].weather[0].icon}
                className="icon"
              />
            </li>
            <li className="temperatures">
              <div className="row">
                <div className="col-4 min-temp">
                  {Math.round(props.forecastData[0].temp.min)}°
                </div>
                <div className="col-4">
                  {Math.round(props.forecastData[0].temp.max)}°
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ForecastDailyBigDevices
