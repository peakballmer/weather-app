import styled from "styled-components";
import { WeatherData } from "../types";

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

const Card = ({ weatherData }: { weatherData: WeatherData }) => {
  return (
    <>
      <CardContainer>
        <p>Location: {weatherData.location.name}</p>
        {/* <p>Local time: {weatherData.location.localtime}</p> */}
        <p>Condition: {weatherData.current.condition.text}</p>
        <p>Temperature: {weatherData.current.temp_c}&deg; C</p>
      </CardContainer>
    </>
  );
};

export default Card;
