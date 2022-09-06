import React from "react";

import "./Weather.css";

export default function Form() {
  return (
    <div className="Weather">
      <div class="col-2 forecast-day">
        <img
          src="http://openweathermap.org/img/wn/04n@2x.png"
          alt=""
          width="80"
        />
        <div class="weather-forecast-date">Tue</div>
        <div class="weather-forecast-temperatures">
          <span class="weather-forecast-temperature-max">17°</span>
          <span class="weather-forecast-temperature-min">14°</span>
        </div>
      </div>
    </div>
  );
}
