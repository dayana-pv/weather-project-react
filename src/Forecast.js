import React from "react";

import "./Forecast.css";

export default function Form() {
  return (
    <div class="weather-temperature">
      <img src="http://openweathermap.org/img/wn/04n@2x.png" alt="" id="icon" />
      <h1>Lima</h1>
      <span class="temperature-degree">
        <strong id="temperature">16</strong>
        <span class="units">
          <a href="./Forecast" id="celsius-link" class="active">
            °C
          </a>
          |
          <a href="./Forecast" id="fahrenheit-link">
            °F
          </a>
        </span>
      </span>

      <ul>
        <li>
          <span id="date">Tueday, 01:04</span>
        </li>
        <li>
          <span id="weather">Clouds</span>
        </li>

        <li>
          Humidity:
          <span id="humidity">85</span>%
        </li>
        <li>
          Wind:
          <span id="wind">4</span>km/h
        </li>
      </ul>
    </div>
  );
}
