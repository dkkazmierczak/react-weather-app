import React from "react"

const FormatHours = props => {
  let date = new Date(props.date * 1000)
  let timezone = props.timezone / 3600

  let hours = date.getHours()
  hours = hours + timezone - 1
  if ((hours >= 0) & (hours < 10)) {
    hours = `0${hours}`
  }

  if (hours < 0) {
    hours = hours + 24
  }

  if (hours > 24) {
    hours = hours - 24
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
