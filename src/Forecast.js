import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Forecast() {
  return (
    <div className="forecast-container">
      <Row className="row">
        <Col className="col-2">
          <div className="card">
            <span className="temp-day">21°C</span>
            <br />
            <span className="emoji">
              <i class="wu wu-black wu-32 wu-chanceflurries"></i>
            </span>
            <br />
            <span className="temp-night">/15°C</span>
            <br />
            <span className="weekday">Sun</span>
          </div>
        </Col>
        <Col className="col-2">
          <div className="card">
            <span className="temp-day">19°C</span>
            <br />
            <span className="emoji">
              <i class="wu wu-black wu-32 wu-chanceflurries"></i>
            </span>
            <br />
            <span className="temp-night">/13°</span>
            <br />
            <span className="weekday">Mon</span>
          </div>
        </Col>
        <Col className="col-2">
          <div className="card">
            <span className="temp-day">18°C</span>
            <br />
            <span className="emoji">
              <i class="wu wu-black wu-32 wu-chanceflurries"></i>
            </span>
            <br />
            <span className="temp-night">/15°</span>
            <br />
            <span className="weekday">Tue</span>
          </div>
        </Col>
        <Col className="col-2">
          <div className="card">
            <span className="temp-day">20°C</span>
            <br />
            <span className="emoji">
              <i class="wu wu-black wu-32 wu-chanceflurries"></i>
            </span>
            <br />
            <span className="temp-night">/14°</span>
            <br />
            <span className="weekday">Wed</span>
          </div>
        </Col>
        <Col className="col-2">
          <div className="card">
            <span className="temp-day">23°C</span>
            <br />
            <span className="emoji">
              <i class="wu wu-black wu-32 wu-chanceflurries"></i>
            </span>
            <br />
            <span className="temp-night">/16°</span>
            <br />
            <span className="weekday">Thu</span>
          </div>
        </Col>
      </Row>
    </div>
  );
}
