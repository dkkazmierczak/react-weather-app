import React from "react"
import WeatherIcon from "../../WeatherIcon/WeatherIcon"

import "../WeatherInfo.scss"

const WeatherInfoBottomSmallDevices = props => {
  return (
    <div className="WeatherInfoBottomSmallDevices">
      <div className="row">
        <div className="col-5 weather-info wrapper">
          <WeatherIcon className="icon" icon="cloud" />
          <div className="text">
            Visibility : {props.weatherData.visibility / 1000} km
          </div>
        </div>
        <div className="col-5 weather-info wrapper">
          <WeatherIcon className="icon" icon="humidity" />
          <div className="text">Humidity : {props.weatherData.humidity} %</div>
        </div>
      </div>
      <div className="row">
        <div className="col-5 weather-info wrapper">
          <WeatherIcon className="icon" icon="wind" />
          <div className="text">Wind : {props.weatherData.wind} km/h</div>
        </div>
        <div className="col-5 weather-info wrapper">
          <WeatherIcon className="icon" icon="pressure" />
          <div className="text">
            Pressure : {props.weatherData.pressure} hPa
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherInfoBottomSmallDevices
