import React, { useEffect, useState } from "react";
import Search from "./Search";

const Weather = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  async function fetchWeatherData(param) {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=42d6a6ede3ad0633760b9a66f6578660`
      );
      const data = await response.json();
      console.log(data, "data");
      if (data) {
        setWeatherData(data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleSearch = () => {
    fetchWeatherData(search);
  };

  const getCurrentDate = () => {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  useEffect(() => {
    fetchWeatherData("patna");
  }, []);
  return (
    <div className="bg-[rgba(66,161,234,0.33)] p-10 pt-6 rounded-lg">
        <h2 className="text-4xl mb-5 bg-slate-500 p-3 rounded-md text-white">Weather App</h2>
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <div className="city-name">
            <h2 className="font-semibold mt-3">
              {weatherData?.name}, <span>{weatherData?.sys?.country}</span>
            </h2>
          </div>
          <div className="date">
            <span>{getCurrentDate()}</span>
          </div>
          <div className="text-6xl font-bold">{weatherData?.main?.temp}</div>
          <p>
            {weatherData && weatherData.weather && weatherData.weather[0]
              ? weatherData.weather[0].description
              : ""}
          </p>
          <div className="flex justify-evenly font-semibold">
            <div>
                <div>
                    <p className="wind">{weatherData?.wind?.speed}</p>
                    <p>Wind Speed</p>
                </div>
            </div>
            <div>
                <div>
                    <p className="humidity">{weatherData?.main?.humidity}%</p>
                    <p>Humidity</p>
                </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
