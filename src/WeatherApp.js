import Background from "./Background";
import Header from "./Header";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import Creator from "./Creator";

export default function WeatherApp() {
  return (
    <div>
      <Background />
      <form>
        <div className="weather-container">
          <Header />
          <CurrentWeather />

          <Forecast />
        </div>
        <Creator />
      </form>
    </div>
  );
}
