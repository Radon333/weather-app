import React from 'react'
import moment from 'moment';
import Day from "../assets/Day.png";
import Night from "../assets/Night.png";
import "../Current/forecast.css"
const Forecast = ({weatherData}) => (
      
    <div id="myloc-main">
          <div className="card">
          <div id="carditems">
                  <div className="cardimgcontainer">
                  <img id="cardimg" src={(weatherData.sys.sunrise<=Date.now() && Date.now()<weatherData.sys.sunset)? Day : Night}/>
                  </div>
                  <h5>Estimated Location: {weatherData.name}</h5>
                  <p>Date: {moment().format('LL')}</p>
                  <p>Temprature: {weatherData.main.temp} &deg;C</p>
                  <p id="des-container"> <h6 className="test">{weatherData.weather[0].main}</h6>
                        <img alt="weather-icon" className="test" src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}/>
                  </p>
                  <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-GB',{hour: '2-digit', minute:'2-digit'})} &nbsp;
                  Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-GB',{hour: '2-digit', minute:'2-digit'})}</p>

                  <p>Humidity: {weatherData.main.humidity}% &nbsp; Wind Speed: {weatherData.wind.speed}m/s</p>
                  </div>
    </div>
    </div>
  )
  
  export default Forecast;