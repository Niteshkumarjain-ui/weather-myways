import React from "react";
import "./ForecastWeather.css";
function ForecastWeather() {
  return (
    <div className="main-card-1">
      <header className="card-header">
        <h2 className="card-header-value">
          Today's ForeCast for New York City,NY,United States
        </h2>
      </header>
      <div className="value-forecast">
        <ul className="make-hour">
          <li className="make-hour-1">
            <a href="#" className="make-hour-2">
              <h3 className="make-hour-3">Morning </h3>
              <div className="make-hout-4">30°</div>
              <div>
                <img src={require("./first.png")}></img>
              </div>
              <div className="make-hour-5">
                <span className="make-hour-6">--</span>
              </div>
            </a>
          </li>
          <li className="make-hour-1">
            <a href="#" className="make-hour-2">
              <h3 className="make-hour-3">Afternoon </h3>
              <div className="make-hout-4">30°</div>
              <div>
                <img src={require("./second.png")}></img>
              </div>
              <div className="make-hour-5">
                <span className="make-hour-6">5%</span>
              </div>
            </a>
          </li>
          <li className="make-hour-1">
            <a href="#" className="make-hour-2">
              <h3 className="make-hour-3">Evening </h3>
              <div className="make-hout-4">30°</div>
              <div>
                <img src={require("./third.png")}></img>
              </div>
              <div className="make-hour-5">
                <span className="make-hour-6">0%</span>
              </div>
            </a>
          </li>
          <li className="make-hour-1">
            <a href="#" className="make-hour-2">
              <h3 className="make-hour-3">Overnight </h3>
              <div className="make-hout-4">30°</div>
              <div>
                <img src={require("./fourth.png")}></img>
              </div>
              <div className="make-hour-5">
                <span className="make-hour-6">--</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <footer className="make-hour-7">
        <a href="#" className="make-hour-8">
          Next Hours
        </a>
      </footer>
    </div>
  );
}

export default ForecastWeather;
