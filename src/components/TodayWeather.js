import React from "react";
import "./TodayWeather.css";
function TodayWeather() {
  return (
    <div className="main-card-2">
      <header className="card-1">
        <h2 className="card-2">Weather Today in New Yorl, NY, United States</h2>
      </header>
      <div className="card-3">
        <div className="card-4">
          <span className="card-5">37°</span>
          <span className="card-6">Feels Like</span>
        </div>
        <div>
          <div>
            <div>
              <div>
                <div>
                  <p>icon sunrise</p>
                  <p>06:22</p>
                </div>
                <div>
                  <p>icon sunset</p>
                  <p>18:07</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-feature-1">
        <div className="card-feature-2">
          <svg
            class="card-feature-3"
            set="current-conditions"
            name="temp"
            theme="dark"
            data-testid="Icon"
            aria-hidden="true"
            role="img"
            viewBox="0 0 24 24"
          >
            <title>Temperature</title>
            <path d="M10.333 15.48v.321c.971.357 1.667 1.322 1.667 2.456 0 1.438-1.12 2.604-2.5 2.604S7 19.695 7 18.257c0-1.134.696-2.099 1.667-2.456v-.322a2.084 2.084 0 0 1-1.25-1.91V5.583a2.083 2.083 0 1 1 4.166 0v7.986c0 .855-.514 1.589-1.25 1.91zM15.8 8.1a2.8 2.8 0 1 1 0-5.6 2.8 2.8 0 0 1 0 5.6zm0-1.85a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
          </svg>
          <div className="card-feature-4">High/Low</div>
          <div className="card-feature-5">
            <span className="feature">--</span>/
            <span className="feature">22°</span>
          </div>
        </div>
        <div className="card-feature-2">
          <svg
            className="card-feature-3"
            set="current-conditions"
            name="wind"
            theme="dark"
            data-testid="Icon"
            aria-hidden="true"
            role="img"
            viewBox="0 0 24 24"
          >
            <title>Wind</title>
            <path
              d="M6 8.67h5.354c1.457 0 2.234-1.158 2.234-2.222S12.687 4.4 11.354 4.4c-.564 0-1.023.208-1.366.488M3 11.67h15.54c1.457 0 2.235-1.158 2.235-2.222S19.873 7.4 18.54 7.4c-.747 0-1.311.365-1.663.78M6 15.4h9.389c1.457 0 2.234 1.159 2.234 2.223 0 1.064-.901 2.048-2.234 2.048a2.153 2.153 0 0 1-1.63-.742"
              stroke-width="2"
              stroke="currentColor"
              stroke-linecap="round"
              fill="none"
            ></path>
          </svg>
          <div className="card-feature-4">Wind</div>
          <div className="feature">
            <span>2 km/h</span>
          </div>
        </div>
        <div className="card-feature-2">
          <svg
            className="card-feature-3"
            set="current-conditions"
            name="humidity"
            theme="dark"
            data-testid="Icon"
            aria-hidden="true"
            role="img"
            viewBox="0 0 24 24"
          >
            <title>Humidity</title>
            <path
              fill-rule="evenodd"
              d="M11.743 17.912a4.182 4.182 0 0 1-2.928-1.182 3.972 3.972 0 0 1-.614-4.962.743.743 0 0 1 .646-.349c.234 0 .476.095.66.275l4.467 4.355c.385.376.39.998-.076 1.275a4.216 4.216 0 0 1-2.155.588M11.855 4c.316 0 .61.14.828.395.171.2.36.416.562.647 1.857 2.126 4.965 5.684 4.965 8.73 0 3.416-2.85 6.195-6.353 6.195-3.505 0-6.357-2.78-6.357-6.195 0-3.082 2.921-6.406 4.854-8.605.242-.275.47-.535.673-.772A1.08 1.08 0 0 1 11.855 4"
            ></path>
          </svg>
          <div className="card-feature-4">Humidity</div>
          <div className="feature">
            <span>60%</span>
          </div>
        </div>
        <div>
          <div>Dew Point icon</div>
          <div>Dew Point</div>
          <div>
            <span>23°</span>
          </div>
        </div>
        <div>
          <p>Pressure icon</p>
          <div>Pressure</div>
          <div>
            <span>
              <p>arrow down icon</p>
              1005.8 mb
            </span>
          </div>
        </div>
        <div>
          <p>uv level icon</p>
          <div>UV Index</div>
          <div>
            <span data-testid="UVIndexValue">0 of 10</span>
          </div>
        </div>
        <div>
          <p>Visibility icon</p>
          <div>Visibility</div>
          <div>
            <span>8.05 km</span>
          </div>
        </div>
        <div>
          <p>moon phase icon</p>
          <div>Moon Phase</div>
          <div>Waxing Gibbous</div>
        </div>
      </div>
    </div>
  );
}

export default TodayWeather;
