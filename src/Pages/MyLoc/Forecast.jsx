import React from 'react'
import moment from 'moment';
import { Card } from "react-bootstrap";
import Day from "../assets/Day.png";
import Night from "../assets/Night.png";
const Forecast = ({weatherData}) => (
      
    <div>
          
          <Card style={{ width: '25rem' }}>
            <Card.Img variant="top" src={Day}/>
            <Card.Body>
                  <Card.Title>Weather Station: {weatherData.name}</Card.Title>
                  <Card.Text>
                  <p>Day: {moment().format('dddd')}</p>
                  <p>Date: {moment().format('LL')}</p>
                  <p>Time {moment().format('HH:mm')} {console.log(Date.now())}</p>
                        <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}/>
                  <p>Temprature: {weatherData.main.temp} &deg;C</p>
                  <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-GB',{hour: '2-digit', minute:'2-digit'})}</p>
                  <p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-GB',{hour: '2-digit', minute:'2-digit'})}</p>
                  <p>Description: {weatherData.weather[0].main}</p>
                  <p>Humidity: {weatherData.main.humidity} %</p>

                  </Card.Text>
            </Card.Body>
           </Card>
    </div>
  )
  
  export default Forecast;
