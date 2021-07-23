import React from "react";
import UseFetch from './UseFetch'
import CitySelector from './CitySelector';
import {Container} from 'react-bootstrap';
import WeatherList from './WeatherList';


const Forecast = () => {
  const {data, error, isLoading, setUrl} = UseFetch();
  console.log(data);

  const getContent = () => {
    if(error) return <h2>Error when fetching: {error}</h2>
    if(!data && isLoading) return <h2>LOADING...</h2>
    if(!data) return null;
    return <WeatherList weathers={data.list} />
  };

  return (
    <Container className="App">
      <CitySelector onSearch={(city) => setUrl(`${process.env.REACT_APP_API_URL}/forecast?q=${city}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)} />

    
      {data && <WeatherList weathers={data.list} />}
      {getContent()}
    </Container>
  );
};

export default Forecast;