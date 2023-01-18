import Weather from "./Weather";
import "./styles.css";

function App() {
  return (
    <div className="styles">
      <div class="container">
        <Weather defaultCity="New york" />

        <footer>
          <a
            href="https://github.com/dayana-pv/weather-project-react"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code{" "}
          </a>
          by Dayana Peve
        </footer>
      </div>
    </div>
  );
}

export default App;
