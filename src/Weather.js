import React, { useState } from "react"
import axios from "axios"
import Navbar from "./Navbar"
import Heading from "./Heading/Heading"
import WeatherInfo from "./WeatherInfo/WeatherInfo"

const Weather = props => {
  const [weatherData, setWeatherData] = useState(null)

  const handleResponse = response => {
    console.log(response.data)
    setWeatherData({
      currentDate: "Tuesday, 14:45",
      temperature: response.data.main.temp,
      feelsLike: response.data.main.feels_like,
      maxTemp: response.data.main.temp_max,
      minTemp: response.data.main.temp_min,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
    })
  }

  if (weatherData) {
    return (
      <div className="Weather">
        <Navbar data={weatherData} />
        <Heading data={weatherData} />
        <WeatherInfo data={weatherData} />
      </div>
    )
  } else if (!weatherData) {
    const apiKey = "7de93f829d058519beb43617b637382e"
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse)

    return "Loading..."
  }
}

export default Weather
