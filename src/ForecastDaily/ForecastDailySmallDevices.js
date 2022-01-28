import React from "react"
import Heading from "./Heading"
import FormatDay from "../FormatDay"
import WeatherIcon from "../WeatherIcon/WeatherIcon"

import "./ForecastDaily.css"

const ForecastDailySmallDevices = props => {
  return (
    <div className="ForecastDailySmallDevices d-lg-none">
      <Heading />
      <table className="table table-sm">
        <tbody>
          <tr>
            <th className="day">
              <FormatDay date={props.forecastData[0].dt} />
            </th>
            <td className="icon">
              <WeatherIcon
                iconID={props.forecastData[0].weather[0].id}
                icon={props.forecastData[0].weather[0].icon}
                className="small-icon"
              />
            </td>
            <td className="min-temp">
              {Math.round(props.forecastData[0].temp.min)}°
            </td>
            <td>{Math.round(props.forecastData[0].temp.max)}°</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ForecastDailySmallDevices
