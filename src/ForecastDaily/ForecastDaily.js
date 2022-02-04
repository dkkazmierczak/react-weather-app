import React from "react"
import ForecastDailySmallDevices from "./ForecastDailySmallDevices"
import ForecastDailyBigDevices from "./ForecastDailyBigDevices"

import "./ForecastDaily.scss"

const ForecastDaily = props => {
  return (
    <span className="ForecastDaily">
      <ForecastDailySmallDevices forecastDaily={props.forecastDaily} />
      <ForecastDailyBigDevices forecastDaily={props.forecastDaily} />
    </span>
  )
}

export default ForecastDaily
