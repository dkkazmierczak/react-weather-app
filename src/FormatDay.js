export default function FormatDay(x) {
  const date = new Date(x * 1000);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const day = days[date.getDay()];

  return day;
}
