import React from 'react'
import moment from 'moment';
import { Card } from "react-bootstrap";
import Day from "../assets/Day.png";

const Forecast = ({weatherData}) => (
    <div>
          <h1>Location: {weatherData.name}</h1>
          <p>Temprature: {weatherData.main.temp} &deg;C</p>
          <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
          <p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
          <p>Description: {weatherData.weather[0].main}</p>
          <p>Humidity: {weatherData.main.humidity} %</p>
          <p>Day: {moment().format('dddd')}</p>
          <p>Date: {moment().format('LL')}</p>

          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Day} />
            <Card.Body>
                  <Card.Title>Weather Station: {weatherData.name}</Card.Title>
                  <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                  </Card.Text>
            </Card.Body>
           </Card>
    </div>
  )
  
  export default Forecast;