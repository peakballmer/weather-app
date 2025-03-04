import { WeatherData } from '../types';

const Card = ({ weatherData }: { weatherData: WeatherData }) => {
  return (
    <>
      <p>Location: {weatherData.location.name}</p>
      <p>Local time: {weatherData.location.localtime}</p>
      <p>Condition: {weatherData.current.condition.text}</p>
      <p>Temperature: {weatherData.current.temp_c}</p>
    </>
  )
}

export default Card;