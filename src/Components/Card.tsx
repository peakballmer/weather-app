import styled from "styled-components";
import { WeatherData } from "../types";
import { GoArrowUp } from "react-icons/go";
import * as TiWeatherIcons from "react-icons/ti"; // Import all TiWeather icons
import { JSX } from "react";

const CardContainer = styled.div`
  position: relative; /* Add relative positioning */
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

const WeatherIconWrapper = styled.div`
  position: absolute; /* Change to absolute positioning */
  top: 10px; /* Position from the top */
  right: 10px; /* Position from the right */
  font-size: 2em; /* Increase the size of the icon */
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

  // Extract local hour value from localtime
  const localHour = new Date(weatherData.location.localtime).getHours();

  // Determine the appropriate icon based on condition and time of day
  const isDayTime = localHour >= 6 && localHour < 18;

  const conditionIcons: { [key: string]: JSX.Element } = {
    "Sunny": isDayTime ? <TiWeatherIcons.TiWeatherSunny /> : <TiWeatherIcons.TiWeatherNight />,
    "Clear": isDayTime ? <TiWeatherIcons.TiWeatherSunny /> : <TiWeatherIcons.TiWeatherNight />,
    "Partly cloudy": isDayTime ? <TiWeatherIcons.TiWeatherPartlySunny /> : <TiWeatherIcons.TiWeatherCloudy />,
    "Cloudy": <TiWeatherIcons.TiWeatherCloudy />,
    "Overcast": <TiWeatherIcons.TiWeatherCloudy />,
    "Mist": <TiWeatherIcons.TiWeatherNight />,
    "Patchy rain possible": <TiWeatherIcons.TiWeatherShower />,
    "Patchy snow possible": <TiWeatherIcons.TiWeatherSnow />,
    "Patchy sleet possible": <TiWeatherIcons.TiWeatherSnow />,
    "Patchy freezing drizzle possible": <TiWeatherIcons.TiWeatherSnow />,
    "Thundery outbreaks possible": <TiWeatherIcons.TiWeatherStormy />,
    "Blowing snow": <TiWeatherIcons.TiWeatherSnow />,
    "Blizzard": <TiWeatherIcons.TiWeatherSnow />,
    "Fog": <TiWeatherIcons.TiWeatherCloudy />,
    "Freezing fog": <TiWeatherIcons.TiWeatherSnow />,
    "Patchy light drizzle": <TiWeatherIcons.TiWeatherShower />,
    "Light drizzle": <TiWeatherIcons.TiWeatherShower />,
    "Freezing drizzle": <TiWeatherIcons.TiWeatherSnow />,
    "Heavy freezing drizzle": <TiWeatherIcons.TiWeatherSnow />,
    "Patchy light rain": <TiWeatherIcons.TiWeatherShower />,
    "Light rain": <TiWeatherIcons.TiWeatherShower />,
    "Moderate rain at times": <TiWeatherIcons.TiWeatherShower />,
    "Moderate rain": <TiWeatherIcons.TiWeatherShower />,
    "Heavy rain at times": <TiWeatherIcons.TiWeatherShower />,
    "Heavy rain": <TiWeatherIcons.TiWeatherShower />,
    "Light freezing rain": <TiWeatherIcons.TiWeatherSnow />,
    "Moderate or heavy freezing rain": <TiWeatherIcons.TiWeatherSnow />,
    "Light sleet": <TiWeatherIcons.TiWeatherSnow />,
    "Moderate or heavy sleet": <TiWeatherIcons.TiWeatherSnow />,
    "Patchy light snow": <TiWeatherIcons.TiWeatherSnow />,
    "Light snow": <TiWeatherIcons.TiWeatherSnow />,
    "Patchy moderate snow": <TiWeatherIcons.TiWeatherSnow />,
    "Moderate snow": <TiWeatherIcons.TiWeatherSnow />,
    "Patchy heavy snow": <TiWeatherIcons.TiWeatherSnow />,
    "Heavy snow": <TiWeatherIcons.TiWeatherSnow />,
    "Ice pellets": <TiWeatherIcons.TiWeatherSnow />,
    "Light rain shower": <TiWeatherIcons.TiWeatherShower />,
    "Moderate or heavy rain shower": <TiWeatherIcons.TiWeatherShower />,
    "Torrential rain shower": <TiWeatherIcons.TiWeatherShower />,
    "Light sleet showers": <TiWeatherIcons.TiWeatherSnow />,
    "Moderate or heavy sleet showers": <TiWeatherIcons.TiWeatherSnow />,
    "Light snow showers": <TiWeatherIcons.TiWeatherSnow />,
    "Moderate or heavy snow showers": <TiWeatherIcons.TiWeatherSnow />,
    "Light showers of ice pellets": <TiWeatherIcons.TiWeatherSnow />,
    "Moderate or heavy showers of ice pellets": <TiWeatherIcons.TiWeatherSnow />,
    "Patchy light rain with thunder": <TiWeatherIcons.TiWeatherStormy />,
    "Moderate or heavy rain with thunder": <TiWeatherIcons.TiWeatherStormy />,
    "Patchy light snow with thunder": <TiWeatherIcons.TiWeatherStormy />,
    "Moderate or heavy snow with thunder": <TiWeatherIcons.TiWeatherStormy />,
  };

  const conditionIcon = conditionIcons[weatherData.current.condition.text] || <TiWeatherIcons.TiWeatherCloudy />;

  return (
    <CardContainer>
      <p>Location: {weatherData.location.name}</p>
      <p>Condition: {weatherData.current.condition.text} <WeatherIconWrapper>{conditionIcon}</WeatherIconWrapper></p>
      <p>Temperature: {weatherData.current.temp_c}&deg; C</p>
      <p>Wind strength: {weatherData.current.wind_kph} kph</p>
      <p>
        Wind direction: <WindDirectionIcon direction={windDirectionDegrees} />
      </p>
    </CardContainer>
  );
};

export default Card;
