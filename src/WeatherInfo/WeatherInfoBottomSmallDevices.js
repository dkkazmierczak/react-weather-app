import React from "react"
import WeatherIcon from "../WeatherIcon/WeatherIcon"

import "./WeatherInfo.css"

const WeatherInfoBottomSmallDevices = props => {
  return (
    <div className="WeatherInfoBottomSmallDevices">
      <div className="row d-md-none">
        <div className="col-5 weather-info wrapper">
          <WeatherIcon className="icon" icon="cloud" />
          <div>Visibility : {props.weatherData.visibility / 1000} km</div>
        </div>
        <div className="col-5 weather-info wrapper">
          <WeatherIcon className="icon" icon="humidity" />
          <div>Humidity : {props.weatherData.humidity} %</div>
        </div>
        <div className="col-5 weather-info wrapper">
          <WeatherIcon className="icon" icon="wind" />
          <div>Wind : {props.weatherData.wind} km/h</div>
        </div>
        <div className="col-5 weather-info wrapper">
          <WeatherIcon className="icon" icon="pressure" />
          <div>Pressure : {props.weatherData.pressure} hPa</div>
        </div>
      </div>
    </div>
  )
}

export default WeatherInfoBottomSmallDevices
