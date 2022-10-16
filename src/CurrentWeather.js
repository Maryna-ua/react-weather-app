export default function CurrentWeather() {
  return (
    <div className="CurrentWeather">
      <section>
        <h1>
          <span>Sat </span>
          <span className="current-time">13</span>
          <span className="current-time">:21</span>
        </h1>

        <h2>Kyiv</h2>
        <div className="indicators">
          <div>
            <i className="fa-solid fa-droplet"></i> Humidity:
            <span>30%</span>
          </div>
          <div>
            <i className="fa-solid fa-wind"></i>Wind: <span>10km/h</span>
          </div>
        </div>

        <h3>
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            alt="weather icon"
          />
          <span>18</span>
          <span className="units">
            <a href="/" className="active">
              {" "}
              °C
            </a>{" "}
            |<a href="/"> °F</a>
          </span>
        </h3>
        <div className="sky">Clouds</div>
      </section>
    </div>
  );
}
