import React from "react"
import WeatherIcon from "../WeatherIcon/WeatherIcon"
import FormatHours from "../FormatHours"

import "./WeatherInfo.css"

const WeatherInfo = props => {
  return (
    <div className="WeatherInfoBigDevices">
      <div className="row">
        <div className="col-3 d-none d-md-block weather-info bg-color py-lg-5 py-4">
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

        <div className="col-3 d-none d-md-block weather-info bg-color py-lg-5 py-4">
          <ul>
            <li className="sky-description">{props.weatherData.description}</li>
            <li>
              <div className="feels-like">
                Feels like : {Math.round(props.weatherData.feelsLike * 10) / 10}{" "}
                °C
              </div>
            </li>
          </ul>
        </div>

        <div className="col-3 d-none d-md-block weather-info bg-color py-lg-5 py-4">
          <WeatherIcon icon="humidity" />
          <div>Humidity : {props.weatherData.humidity} %</div>
        </div>
      </div>

      <div className="row">
        <div className="col-3 d-none d-md-block weather-info bg-color py-lg-5 py-4">
          <ul className="sun">
            <li>
              <WeatherIcon icon="sunrise" /> Sunrise :{" "}
              <FormatHours date={props.weatherData.sunrise} />
            </li>
            <li>
              <WeatherIcon icon="sunset" />{" "}
              <span className="sunset">
                Sunset : <FormatHours date={props.weatherData.sunset} />
              </span>
            </li>
          </ul>
        </div>

        <div className="col-3 d-none d-md-block weather-info bg-color py-lg-5 py-4">
          <WeatherIcon icon="pressure" />
          <div>Pressure : {props.weatherData.pressure} hPa</div>
        </div>

        <div className="col-3 d-none d-md-block weather-info bg-color py-lg-5 py-4">
          <WeatherIcon icon="wind" />
          <div>Wind : {props.weatherData.wind} km/h</div>
        </div>
      </div>
    </div>
  )
}

export default WeatherInfo
