import React from "react";

export default function FormatHours(x) {
  const date = new Date(x * 1000);
  const hours = date.getHours();

  return hours;
}
