import React, { useState } from "react";
import axios from "axios";

export default function App() {
  const [city, setCity] = useState("");
  const [loader, setLoader] = useState(false);
  const [weather, setWeather] = useState({});

  function handleSubmit(event) {
    event.preventDefault();

    let apiKey = "094780c710fa4efd669f0df8c3991927";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(showWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  function showWeather(response) {
    setLoader(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }
  let form = (
    <form className="citySearch" onSubmit={handleSubmit}>
      <input
        type="search"
        className="placeForTyping"
        placeholder="Enter a city..."
        autoFocus={true}
        onChange={updateCity}
      />
      <input type="submit" className="submit" value="Current place" />
      <input type="submit" className="submit" value="Search" />
    </form>
  );
  if (loader) {
    return (
      <div>
        <div>{form}</div>
        <section>
          <h1>
            <span>Sat </span>
            <span className="current-time">11</span>
            <span className="current-time">:21</span>
          </h1>

          <h2>{city}</h2>
          <div className="indicators">
            <div>
              Humidity:
              <span> {weather.humidity} % </span>
            </div>
            <div>
              Wind: <span>{Math.round(weather.wind)} km/h</span>
            </div>
          </div>

          <h3>
            <img src={weather.icon} alt={weather.description} />
            <span>{Math.round(weather.temperature)}</span>
            <span className="units">
              <a href="/" className="active">
                {" "}
                °C
              </a>{" "}
              |<a href="/"> °F</a>
            </span>
          </h3>
          <div className="sky"> {weather.description} </div>
        </section>
      </div>
    );
  } else {
    return (
      <div>
        <div>{form}</div>
        <section>
          <h1>
            <span>Sat </span>
            <span className="current-time">11</span>
            <span className="current-time">:21</span>
          </h1>

          <h2>Kyiv</h2>
          <div className="indicators">
            <div>Humidity</div>
            <div>Wind</div>
          </div>

          <h3>
            <span>18</span>
            <span className="units">
              <a href="/" className="active">
                {" "}
                °C
              </a>{" "}
              |<a href="/"> °F</a>
            </span>
          </h3>
        </section>
      </div>
    );
  }
}
