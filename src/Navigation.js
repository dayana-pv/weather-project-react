import React from "react";

import "./Navigation.css";

export default function Form() {
  return (
    <form class="m-2">
      <div class="row">
        <div class="col-7">
          <input
            type="search"
            class="form-control"
            placeholder="Type a city.."
            id="city-input"
            autocomplete="off"
          />
        </div>
        <div class="col-2">
          <button type="submit" class="btn mb-3 mx-1 button-style" id="search">
            Search
          </button>
        </div>
        <div class="col-2">
          <button type="submit" class="btn mb-3 mx-1 button-style" id="current">
            Current
          </button>
        </div>
      </div>
    </form>
  );
}
