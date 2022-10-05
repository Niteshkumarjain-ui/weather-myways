import React from "react";
import "./ActualWeather.css";
function ActualWeather() {
  return (
    <div className="main">
      <section className="main-card">
        <div className="main-card-one">
          <div className="main-card-header">
            <h1>
              New York City, NY,United States
              <span> As of 04.12 EDT</span>
            </h1>
          </div>
          <div className="main-card-two">
            <div className="main-card-three">
              <div className="main-card-four">
                <span className="degree">30°</span>
                <div className="value">Sunny</div>
                <div className="value-1">
                  Day <span>32°</span> . Night <span>22°</span>
                </div>
              </div>
              <div className="image">
                <img src={require("./icon.png")}></img>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ActualWeather;
