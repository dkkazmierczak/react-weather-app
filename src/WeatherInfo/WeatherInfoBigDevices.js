import React from "react"
import WeatherIcon from "../WeatherIcon/WeatherIcon"
import MinMaxTemperature from "./MinMaxTemperature"
import Description from "./Description"
import SunTime from "./SunTime"
import "./WeatherInfo.scss"

const WeatherInfo = props => {
  return (
    <div className="WeatherInfoBigDevices d-none d-md-block">
      <div className="row">
        <div className="col-3 weather-info wrapper py-lg-5 py-4">
          <MinMaxTemperature weatherData={props.weatherData} />
        </div>
        <div className="col-3 weather-info wrapper py-lg-5 py-4">
          <Description weatherData={props.weatherData} />
        </div>
        <div className="col-3 weather-info wrapper py-lg-5 py-4">
          <WeatherIcon className="small-icon" icon="humidity" />
          <div>Humidity : {props.weatherData.humidity} %</div>
        </div>
      </div>

      <div className="row">
        <div className="col-3 weather-info wrapper py-lg-5 py-4">
          <SunTime weatherData={props.weatherData} />
        </div>

        <div className="col-3 weather-info wrapper py-lg-5 py-4">
          <WeatherIcon className="small-icon" icon="pressure" />
          <div>Pressure : {props.weatherData.pressure} hPa</div>
        </div>

        <div className="col-3 weather-info wrapper py-lg-5 py-4">
          <WeatherIcon className="small-icon" icon="wind" />
          <div>Wind : {props.weatherData.wind} km/h</div>
        </div>
      </div>
    </div>
  )
}

export default WeatherInfo
