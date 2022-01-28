const FormatDay = props => {
  const date = new Date(props.date * 1000)
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]
  const day = days[date.getDay()]

  return day
}
export default FormatDay
