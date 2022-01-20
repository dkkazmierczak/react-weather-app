import React from "react";

export default function CurrentDate() {
  let weatherdata = {
    city: "Halden",
    date: "Tuesday, 14:45",
    temp: 14,
    feelsLike: 10,
    description: "cloudy",
    icon: "http://openweathermap.org/img/wn/10d@2x.png",
    minTemp: 8,
    maxTemp: 10,
    humidity: 90,
    wind: 5
  };
  /*const now = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  
  const day = days[now.getDay()];
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const today = document.querySelector("#today-date");

  if (minutes < 10) {
    today.innerHTML = `{day}, {hours}:0{minutes}`;
  } else if (hours < 10) {
    today.innerHTML = `{day}, 0{hours}:{minutes}`;
  } else {
    today.innerHTML = `{day}, {hours}:{minutes}`;
  }*/

  return <div className="today-date">{weatherdata.date}</div>;
}
