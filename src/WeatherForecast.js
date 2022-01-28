/* eslint-disable */
import React, { useEffect, useState } from "react"
import axios from "axios"
import ForecastHourly from "./ForecastHourly/ForecastHourly"
import ForecastDaily from "./ForecastDaily/ForecastDaily"

const WeatherForecast = ({ weatherData }) => {
  const [forecastHourly, setForecastHourly] = useState(null)
  const [forecastDaily, setForecastDaily] = useState(null)

  const search = async () => {
    const apiKey = "7de93f829d058519beb43617b637382e"
    let lat = weatherData.lat
    let lon = weatherData.lon
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${apiKey}&units=metric`
    )
    console.log(data)
    setForecastDaily(data.daily)
    setForecastHourly(data.hourly)
  }

  useEffect(() => {
    search()
  }, [])

  useEffect(() => {
    search()
  }, [weatherData])

  if (!forecastHourly) return "Loading..."
  if (!forecastDaily) return "Loading..."

  return (
    <div className="WeatherForecast">
      <ForecastHourly forecastHourly={forecastHourly} />
      <ForecastDaily forecastDaily={forecastDaily} />
    </div>
  )
}

export default WeatherForecast
