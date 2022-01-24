import React from "react"

const MaxTemp = props => {
  return (
    <div className="max-temp">
      Max : {Math.round(props.maxTemp * 10) / 10} °C
    </div>
  )
}

export default MaxTemp
