"use client";
import React from "react";
import WeatherDisplay from "@/components/WeatherDisplay";
import WeatherForm from "@/components/WeatherForm";
import weatherApiData from "@/lib/apidata";
import Footer from "@/components/Footer";

export default function Home() {
  const [weatherData, setWeatherData] = React.useState([]);
  const [city, setCity] = React.useState("");
  const [error, setError] = React.useState("");

  const handlevalue = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (city.length < 1) {
      setError("Please enter a city name");
    } else {
      const weatherdataRes = await weatherApiData(city);
      setWeatherData([weatherdataRes]);
      // console.log(weatherdataRes.current);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-4 flex flex-col justify-between">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center min-h-[80vh] max-h-full">
        <WeatherForm
          city={city}
          handleSubmit={handleSubmit}
          handlevalue={handlevalue}
          error={error}
          setError={setError}
        />
        <WeatherDisplay weatherData={weatherData[0]} />
      </div>
      <Footer />
    </div>
  );
}
