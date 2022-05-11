import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import WeatherApp from './WeatherApp';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="WeatherApp">
      <h1>Weather App</h1>
      <WeatherApp />
    </div>
    <footer>
  
        This website was coded by Amanda Corral and is open-sourced in <a href="https://github.com/Amandacorral07/weather-react">GitHub</a>
      
    </footer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
