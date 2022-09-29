import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherDay from "./WeatherDay";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setweatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setweatherData({
      ready: true,
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
    const apiKey = "61a4dbc4a1dd547ee28f70609a99874b";
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
              <div class="weather-forecast" id="forecast">
                <div class="row">
                  <div class="col-3 mx-3">
                    <WeatherDay data={weatherData} />
                  </div>
                  <div class="col-3 mx-3">
                    <WeatherDay data={weatherData} />
                  </div>
                  <div class="col-3 mx-3">
                    <WeatherDay data={weatherData} />
                  </div>
                </div>
                <div class="row">
                  <div class="col-3 mx-3">
                    <WeatherDay data={weatherData} />
                  </div>
                  <div class="col-3 mx-3">
                    <WeatherDay data={weatherData} />
                  </div>
                  <div class="col-3 mx-3">
                    <WeatherDay data={weatherData} />
                  </div>
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
