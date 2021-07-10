import React  from "react";
import { AwesomeButton } from "react-awesome-button";
import Asset2 from "../assets/Asset 2.png";
import Asset3 from "../assets/Asset 3.png";
import Asset4 from "../assets/Asset 4.png";
import { Carousel } from "react-bootstrap";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";
import "react-awesome-button/dist/styles.css";
import "../Home/home.css";
function Home() {
    return (
        <div className="home-container">
          <motion.div initial={{ y:-200 }} animate={{y:0}} transition={{delay:0.5,duration:0.5}}>
            <h1 id="home-title">Weather App</h1>
          </motion.div>
          <motion.div 
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{delay:1,duration:2}}
            >
            <Carousel controls={false} indicators={false} className="weather-icon-container">
  <Carousel.Item interval={3000}>
    <img
      className="weather-icon"
      src={Asset2}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <img
      className="weather-icon"
      src={Asset3}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <img
      className="weather-icon"
      src={Asset4}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
            <br/>
            <br/>
            <Link to="/current-weather">
            <AwesomeButton
                type="secondary"
                size="large"
                ripple
                className="aws-btn"
            >
            Get Forecast
            </AwesomeButton>
            </Link>
            </motion.div>
        </div>
    )
}

export default Home
