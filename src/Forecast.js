import React from "react";
export default function Forecast() {
  return (
    <div className="forecast-container">
      <div className="row">
        <div className="col-2">
          <div className="card">
            <span className="temp-day">21°C</span>
            <br />
            <span className="emoji">
              <i className="fa-solid fa-sun"></i>
            </span>
            <br />
            <span className="temp-night">/15°C</span>
            <br />
            <span className="weekday">Sun</span>
          </div>
        </div>
        <div className="col-2">
          <div className="card">
            <span className="temp-day">19°C</span>
            <br />
            <span className="emoji">
              <i className="fa-solid fa-cloud-sun"></i>
            </span>
            <br />
            <span className="temp-night">/13°</span>
            <br />
            <span className="weekday">Mon</span>
          </div>
        </div>
        <div className="col-2">
          <div className="card">
            <span className="temp-day">18°C</span>
            <br />
            <span className="emoji">
              <i className="fa-solid fa-cloud-sun"></i>
            </span>
            <br />
            <span className="temp-night">/15°</span>
            <br />
            <span className="weekday">Tue</span>
          </div>
        </div>
        <div className="col-2">
          <div className="card">
            <span className="temp-day">20°C</span>
            <br />
            <span className="emoji">
              <i className="fa-solid fa-cloud-sun"></i>
            </span>
            <br />
            <span className="temp-night">/14°</span>
            <br />
            <span className="weekday">Wed</span>
          </div>
        </div>
        <div className="col-2">
          <div className="card">
            <span className="temp-day">23°C</span>
            <br />
            <span className="emoji">
              <i className="fa-solid fa-sun"></i>
            </span>
            <br />
            <span className="temp-night">/16°</span>
            <br />
            <span className="weekday">Thu</span>
          </div>
        </div>
      </div>
    </div>
  );
}
