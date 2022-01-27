import React from "react"

import "./WeatherIcon.css"
import "./css/weather-icons-wind.css"
import "./css/weather-icons-wind.min.css"
import "./css/weather-icons.css"
import "./css/weather-icons.min.css"

const WeatherIcon = props => {
  const codeMapping = {
    200: "wi-day-sleet-storm",
    201: "wi-storm-showers",
    202: "wi-storm-showers",
    210: "wi-thunderstorm",
    211: "wi-lightning",
    212: "wi-thunderstorm",
    221: "wi-day-storm-showers",
    230: "wi-storm-showers",
    232: "wi-storm-showers",
    232: "wi-storm-showers",
    511: "wi-snow",
    520: "wi-sleet",
    521: "wi-showers",
    522: "wi-rain",
    531: "wi-showers",
    600: "wi-snow",
    601: "wi-snow",
    602: "wi-snow",
    611: "wi-sleet",
    612: "wi-snow",
    613: "wi-snow",
    615: "wi-rain-mix",
    616: "wi-rain-mix",
    620: "wi-snow",
    621: "wi-snow",
    622: "wi-snow",
    701: "wi-fog",
    711: "wi-smoke",
    721: "wi-fog",
    731: "wi-sandstorm",
    741: "wi-fog",
    751: "wi-sandstorm",
    761: "wi-dust",
    762: "wi-volcano",
    771: "wi-hail",
    781: "wi-tornado",
    803: "wi-cloudy",
    804: "wi-cloudy",
    "01d": "wi-day-sunny wi-flip-vertical",
    "01n": "wi-night-clear wi-rotate-270",
    "02d": "wi-day-sunny-overcast",
    "03n": "wi-day-cloudy",
    "03d": "wi-day-sunny-overcast",
    "03n": "wi-night-alt-cloudy",
    "9d": "wi-day-rain-showers",
    "9n": "wi-night-alt-showers",
    "10d": "wi-day-rain-showers",
    "10n": "wi-night-alt-showers",
    humidity: "wi-humidity small-icon",
    wind: "wi-strong-wind small-icon",
    sunrise: "wi-sunrise small-icon",
    sunset: "wi-sunset small-icon",
    pressure: "wi-barometer small-icon",
    thermometer: "wi-thermometer small-icon",
  }
  return (
    <span className="WeatherIcon">
      <i
        className={`wi ${codeMapping[props.iconID]} ${
          codeMapping[props.icon]
        } icon`}></i>
    </span>
  )
}

export default WeatherIcon
