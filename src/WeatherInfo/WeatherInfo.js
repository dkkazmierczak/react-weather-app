import React from "react"
import MaxTemp from "./MaxTemp"
import MinTemp from "./MinTemp"
import Humidity from "./Humidity"
import Wind from "./Wind"
import FeelsLike from "./FeelsLike"

import "./WeatherInfo.css"

const WeatherInfo = props => {
  return (
    <div className="WeatherInfo container">
      <div className="row">
        <div className="col-3 d-none d-md-block weather-info bg-color py-5">
          <ul>
            <li>
              <MaxTemp maxTemp={props.weatherData.maxTemp} />
            </li>
            <li>
              <MinTemp minTemp={props.weatherData.minTemp} />
            </li>
          </ul>
        </div>

        <div className="col-3 d-none d-md-block weather-info bg-color py-5">
          <ul>
            <li className="sky-description">{props.weatherData.description}</li>
            <li>
              <FeelsLike feelsLike={props.weatherData.feelsLike} />
            </li>
          </ul>
        </div>

        <div className="col-3 d-none d-md-block weather-info bg-color py-5">
          <ul>
            <li>
              <Humidity humidity={props.weatherData.humidity} />
            </li>
            <li>
              <Wind wind={props.weatherData.wind} />
            </li>
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="col-5 d-md-none weather-info bg-color">
          <ul>
            <li>
              <FeelsLike feelsLike={props.weatherData.feelsLike} />
            </li>
            <li>
              <MaxTemp maxTemp={props.weatherData.maxTemp} />
            </li>
            <li>
              <MinTemp minTemp={props.weatherData.minTemp} />
            </li>
          </ul>
        </div>
        <div className="col-5 d-md-none weather-info bg-color">
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
                  <Humidity humidity={props.weatherData.humidity} />
                </li>
                <li>
                  <Wind wind={props.weatherData.wind} />
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
