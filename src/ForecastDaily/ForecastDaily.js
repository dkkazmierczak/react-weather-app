import React from "react"
import ForecastDailySmallDevices from "./ForecastDailySmallDevices"
import ForecastDailyBigDevices from "./ForecastDailyBigDevices"

import "./ForecastDaily.css"

const ForecastDaily = props => {
  return (
    <div className="ForecastDaily">
      <ForecastDailySmallDevices forecastData={props.forecastData} />
      <ForecastDailyBigDevices forecastData={props.forecastData} />
    </div>
  )
}

export default ForecastDaily
