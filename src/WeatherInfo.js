import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div class="weather-temperature">
        <WeatherIcon code={props.data.icon} alt={props.data.description} />
        <h1>{props.data.city}</h1>
        <span class="temperature-degree">
          <WeatherTemperature celsius={props.data.temperature} />
        </span>
        <ul>
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li>
            <span id="weather">{props.data.description}</span>
          </li>

          <li>
            Humidity:
            <span id="humidity">{props.data.humidity}</span>%
          </li>
          <li>
            Wind:
            <span id="wind">{props.data.wind}</span>km/h
          </li>
        </ul>
      </div>
      <br />
    </div>
  );
}
