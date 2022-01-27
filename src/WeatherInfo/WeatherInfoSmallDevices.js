import React from "react"

import "./WeatherInfo.css"

const WeatherInfo = props => {
  return (
    <div className="WeatherInfoSmallDevices">
      <div className="row">
        <div className="col-5 d-md-none weather-info wrapper">
          <ul>
            <li>
              <div className="feels-like">
                Feels like : {Math.round(props.weatherData.feelsLike * 10) / 10}{" "}
                °C
              </div>
            </li>
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
        <div className="col-5 d-md-none weather-info wrapper">
          <div className="row">
            <div className="col-12">
              <ul>
                <li className="sky-description">
                  {props.weatherData.description}
                </li>
              </ul>
            </div>
            <div className="col-12">
              <ul>
                <li>
                  <div>Humidity : {props.weatherData.humidity} %</div>
                </li>
                <li>
                  <div>Wind : {props.weatherData.wind} km/h</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherInfo
