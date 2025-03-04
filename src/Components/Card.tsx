import styled from "styled-components";
import { WeatherData } from "../types";
import { GoArrowUp } from "react-icons/go";

const CardContainer = styled.div`
  border: 1px solid black;
  width: 300px;
  padding: 10px;
  margin-top: 10px;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
  color: #333;
  font-family: Arial, sans-serif;
  font-size: 16px;
`;

const WindDirectionIcon = styled(GoArrowUp)<{ direction: number }>`
  transform: rotate(${(props) => props.direction}deg);
`;

const Card = ({ weatherData }: { weatherData: WeatherData }) => {
  const windDirection = weatherData.current.wind_dir;

  // Convert wind direction to degrees
  const windDirectionDegrees = (() => {
    switch (windDirection) {
      case "N":
        return 0;
      case "NNE":
        return 22.5;
      case "NE":
        return 45;
      case "ENE":
        return 67.5;
      case "E":
        return 90;
      case "ESE":
        return 112.5;
      case "SE":
        return 135;
      case "SSE":
        return 157.5;
      case "S":
        return 180;
      case "SSW":
        return 202.5;
      case "SW":
        return 225;
      case "WSW":
        return 247.5;
      case "W":
        return 270;
      case "WNW":
        return 292.5;
      case "NW":
        return 315;
      case "NNW":
        return 337.5;
      default:
        return 0;
    }
  })();

  return (
    <CardContainer>
      <p>Location: {weatherData.location.name}</p>
      <p>Condition: {weatherData.current.condition.text}</p>
      <p>Temperature: {weatherData.current.temp_c}&deg; C</p>
      <p>Wind strength: {weatherData.current.wind_kph} kph</p>
      <p>
        Wind direction: <WindDirectionIcon direction={windDirectionDegrees} />
      </p>
    </CardContainer>
  );
};

export default Card;
