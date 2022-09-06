import Forecast from "./Forecast";
import Navigation from "./Navigation";
import Weather from "./Weather";
import "./styles.css";

function App() {
  return (
    <div className="styles">
      <div class="container">
        <div class="weather-app-wrapper">
          <div class="weather-app">
            <div class="row">
              <div
                class="col-4 weather-information
              "
              >
                <Forecast />
              </div>
              <div class="col-8 city-form">
                <Navigation />
                <hr />
                <div class="weather-forecast" id="forecast">
                  <div class="row">
                    <div class="col-3 mx-3">
                      <Weather />
                    </div>
                    <div class="col-3 mx-3">
                      <Weather />
                    </div>
                    <div class="col-3 mx-3">
                      <Weather />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-3 mx-3">
                      <Weather />
                    </div>
                    <div class="col-3 mx-3">
                      <Weather />
                    </div>
                    <div class="col-3 mx-3">
                      <Weather />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <small>
            <a
              href="https://github.com/dayana-pv/weather-project-react"
              target="_blank"
              rel="noreferrer"
            >
              Open-source code
            </a>
            by Dayana Peve
          </small>
        </div>
      </div>
    </div>
  );
}

export default App;
