import React from "react"

const FormatHours = props => {
  let date = new Date(props.date * 1000)

  let hours = date.getHours()
  if (hours < 10) {
    hours = `0${hours}`
  }

  let minutes = date.getMinutes()
  if (minutes < 10) {
    minutes = `0${minutes}`
  }
  return (
    <span>
      {hours}:{minutes}
    </span>
  )
}

export default FormatHours
