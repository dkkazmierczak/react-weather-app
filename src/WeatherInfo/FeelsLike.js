import React from "react"

const FeelsLike = props => {
  return (
    <div className="feels-like">
      Feels like : {Math.round(props.feelsLike * 10) / 10} °C
    </div>
  )
}

export default FeelsLike
