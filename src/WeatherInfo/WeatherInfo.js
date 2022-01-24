import React from "react"
import MaxTemp from "./MaxTemp"
import MinTemp from "./MinTemp"
import CurrentDate from "./CurrentDate"
import Sky from "./Sky"
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
              <MaxTemp maxTemp={props.data.maxTemp} />
            </li>
            <li>
              <MinTemp minTemp={props.data.minTemp} />
            </li>
          </ul>
        </div>

        <div className="col-3 d-none d-md-block weather-info bg-color py-5">
          <ul>
            <li>
              <CurrentDate currentDate={props.data.currentDate} />
            </li>
            <li>
              <Sky description={props.data.description} />
            </li>
          </ul>
        </div>

        <div className="col-3 d-none d-md-block weather-info bg-color py-5">
          <ul>
            <li>
              <Humidity humidity={props.data.humidity} />
            </li>
            <li>
              <Wind wind={props.data.wind} />
            </li>
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="col-5 d-md-none weather-info bg-color">
          <div className="row">
            <div className="col-12">
              <ul>
                <li>
                  <Sky description={props.data.description} />
                </li>
              </ul>
            </div>
            <div className="col-12">
              <ul>
                <li>
                  <Humidity humidity={props.data.humidity} />
                </li>
                <li>
                  <Wind wind={props.data.wind} />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-5 d-md-none weather-info bg-color">
          <ul>
            <li>
              <FeelsLike feelsLike={props.data.feelsLike} />
            </li>
            <li>
              <MaxTemp maxTemp={props.data.maxTemp} />
            </li>
            <li>
              <MinTemp minTemp={props.data.minTemp} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default WeatherInfo
