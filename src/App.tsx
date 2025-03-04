import { useState } from "react";
import "./App.css";
import { API_KEY, WEATHER_API_BASE_URL } from "./assets/config";
import Card from "./Components/Card.tsx";
import { WeatherData } from "./types";

function App() {

  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [location, setLocation] = useState<string>("");

  function handleLocationChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setLocation(event.target.value);
  }

  function handleGetLocationClick(): void {
    if (!location) {
      alert("Please enter a location");
      return;
    }
    fetch(`${WEATHER_API_BASE_URL}/current.json?key=${API_KEY}&q=${location}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch weather data");
        }
        return response.json()
      })
      .then((data) => {
        if (data.error) {
          throw new Error(data.error.message);
        }
        setWeatherData(data);
        setLocation("");
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);        
        alert("Failed to fetch weather data. Please try again.");
      });
  }

  function handleKeyUp(event: React.KeyboardEvent<HTMLInputElement>): void {
    console.log("key pressed");
    
    if (event.key === "Enter") {
      handleGetLocationClick();
    }
  }

  return (
    <>
      <h1>Weather App</h1>

      <input type="text" placeholder="Enter city name" value={location} onChange={handleLocationChange} onKeyUp={handleKeyUp} />
      <button onClick={handleGetLocationClick}>Get Weather</button>

      {weatherData && (
        <>
          <Card weatherData={weatherData} />
          
        </>
      )}
    </>
  );
}

export default App;
