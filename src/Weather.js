import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setweatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setweatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function search() {
    let apiKey = "1affa5bc7832c77e10fd88474a137ac1";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div class="weather-app-wrapper">
          <div class="weather-app">
            <div class="row">
              <div
                class="col-4 weather-information
              "
              >
                <WeatherInfo data={weatherData} />
              </div>
              <div class="col-8 city-form">
                <form class="m-2">
                  <div class="row">
                    <div class="col-7">
                      <input
                        type="search"
                        class="form-control"
                        placeholder="Type a city.."
                        id="city-input"
                        autocomplete="off"
                        onChange={handleCityChange}
                      />
                    </div>
                    <div class="col-2">
                      <button
                        type="submit"
                        class="btn mb-3 mx-1 button-style"
                        id="search"
                        onClick={handleSubmit}
                      >
                        Search
                      </button>
                    </div>
                    <div class="col-2">
                      <button
                        type="submit"
                        class="btn mb-3 mx-1 button-style"
                        id="current"
                      >
                        Current
                      </button>
                    </div>
                  </div>
                </form>
                <hr />
                <div className="weather-forecast">
                  <WeatherForecast coordinates={weatherData.coordinates} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
