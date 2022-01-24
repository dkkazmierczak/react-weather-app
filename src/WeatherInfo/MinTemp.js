import React from "react"

const MinTemp = props => {
  return (
    <div className="min-temp">
      Min : {Math.round(props.minTemp * 10) / 10} °C
    </div>
  )
}

export default MinTemp
