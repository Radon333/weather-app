import React from 'react'
import moment from 'moment';
import "../Current/forecast.css"
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import { AwesomeButton } from "react-awesome-button";

const Forecast = ({weatherData}) => (
<div id="bodybg">
      <motion.div initial={{ y:-200 }} animate={{y:0}} transition={{delay:0.5,duration:0.5}}>
      <h2 id="cwdtitle">Current Weather Data</h2>
      </motion.div>
      <motion.div 
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{delay:1,duration:2}}
            >
<div className="main">
      <div className="test">
            <h5>Estimated Location: {weatherData.name}</h5>
            
            <p>Date: {moment().format('LL')}</p>
            <p>Temprature: {weatherData.main.temp} &deg;C</p>
                  <p id="des-container"> <h6 >{weatherData.weather[0].main}</h6>
                  <motion.div whileHover={{scale: 1.2}}>
                        <img alt="weather-icon"  src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}/>
                  </motion.div>
                  </p>
            
      

            
                 
                 <p>Humidity: {weatherData.main.humidity}% &nbsp; Wind Speed: {weatherData.wind.speed}m/s</p>
            

            
                  <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-GB',{hour: '2-digit', minute:'2-digit'})} &nbsp;
                  Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-GB',{hour: '2-digit', minute:'2-digit'})}</p>
           
                  
                  </div>
                             
</div>
</motion.div>
           <motion.div initial={{ y:1000 }} animate={{y:0}} transition={{delay:0.5,duration:0.5}}>
           <div id="fcbtn-container">
           <Link to="/home">
            <AwesomeButton
                type="secondary"
                size="medium"
                ripple
            >
            Home
            </AwesomeButton>
            </Link>
            </div>
            </motion.div>
</div>
  )
  
  export default Forecast;