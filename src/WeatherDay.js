import React from "react";
import WeatherIconDay from "./WeatherIconDay";

import "./WeatherDay.css";

export default function WeatherDay(props) {
  return (
    <div className="WeatherDay">
      <div class="col-2 forecast-day">
        <WeatherIconDay code={props.data.icon} alt={props.data.description} />
        <div class="weather-forecast-date">Tue</div>
        <div class="weather-forecast-temperatures">
          <span class="weather-forecast-temperature-max">17°</span>
          <span class="weather-forecast-temperature-min">14°</span>
        </div>
      </div>
    </div>
  );
}
