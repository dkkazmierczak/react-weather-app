/* eslint-disable */
import React, { useEffect, useState } from "react"
import axios from "axios"
import Heading from "./Heading/Heading"
import WeatherInfo from "./WeatherInfo/WeatherInfo"
import WeatherForecast from "./WeatherForecast"

const Weather = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null)

  const search = async () => {
    const apiKey = "7de93f829d058519beb43617b637382e"
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    )
    setWeatherData({
      date: data.dt,
      temperature: data.main.temp,
      feelsLike: data.main.feels_like,
      maxTemp: data.main.temp_max,
      minTemp: data.main.temp_min,
      description: data.weather[0].description,
      humidity: data.main.humidity,
      wind: data.wind.speed,
      city: data.name,
      iconID: data.weather[0].id,
      icon: data.weather[0].icon,
      sunrise: data.sys.sunrise,
      sunset: data.sys.sunset,
      pressure: data.main.pressure,
      lat: data.coord.lat,
      lon: data.coord.lon,
      timezone: data.timezone,
    })
  }

  useEffect(() => {
    search()
  }, [city])

  if (!weatherData) return "Loading..."

  return (
    <div className="Weather">
      <Heading weatherData={weatherData} />
      <WeatherInfo weatherData={weatherData} />
      <WeatherForecast weatherData={weatherData} />
    </div>
  )
}

export default Weather
