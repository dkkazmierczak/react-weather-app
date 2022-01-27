/* eslint-disable */
import React, { useEffect, useState } from "react"
import axios from "axios"
import ForecastHourly from "./ForecastHourly/ForecastHourly"
import ForecastDaily from "./ForecastDaily/ForecastDaily"

const WeatherForecast = props => {
  const [forecastData, setForecastData] = useState(null)

  const search = async () => {
    const apiKey = "7de93f829d058519beb43617b637382e"
    let lat = props.weatherData.lat
    let lon = props.weatherData.lon
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${apiKey}&units=metric`
    )
    console.log(data)
    setForecastData({
      temperatureDailyMax: data.daily[1].temp.max,
      temperatureDailyMin: data.daily[1].temp.min,
    })
  }

  useEffect(() => {
    search()
  }, [])

  useEffect(() => {
    search()
  }, [props])

  if (!forecastData) return "Loading..."

  return (
    <div className="WeatherForecast">
      <ForecastHourly forecastData={forecastData} />
      <ForecastDaily forecastData={forecastData} />
    </div>
  )
}

export default WeatherForecast
