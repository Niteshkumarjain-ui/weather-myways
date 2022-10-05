import React from "react";
import "./App.css";
import ActualWeather from "./components/ActualWeather";
import ForecastWeather from "./components/ForecastWeather";
import TodayWeather from "./components/TodayWeather";
function App() {
  return (
    <div className="App">
      <ActualWeather />
      <ForecastWeather />
      <TodayWeather />
    </div>
  );
}
export default App;
