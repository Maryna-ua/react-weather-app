import React from "react";
import Header from "./Header";

import Forecast from "./Forecast";
import Creator from "./Creator";

export default function WeatherApp() {
  return (
    <div>
      <form>
        <div className="weather-container">
          <Header />

          <Forecast />
        </div>
        <Creator />
      </form>
    </div>
  );
}
