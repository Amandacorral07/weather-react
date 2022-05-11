import "./WeatherApp.css";
import React, { useState } from "react";
import axios from "axios";

export default function WeatherApp() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState(null);

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: ` http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "04516b03d862a33f9817076057aa38aa";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  let form = (
    <div className="Weather App">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city.."
          onChange={updateCity}
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Description: {weather.description} </li>
          <li>Wind: {weather.wind}km/h</li>
          <li>
            {" "}
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
