"use client";
import React from "react";

function WeatherForm({ city, handleSubmit, handlevalue, error, setError }) {
  return (
    <div className="w-full max-w-sm mx-auto my-5">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          onClick={() => setError(null)}
          onChange={handlevalue}
          type="text"
          name="city"
          placeholder="Enter city name"
          value={city}
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white  dark:placeholder:text-gray-400focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700  dark:bg-blue-500 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500  focus:ring-offset-2 dark:focus:ring-offset-gray-900"
        >
          Get Weather
        </button>

        {error && (
          <p className="text-red-500 text-sm text-center mt-2">{error}</p>
        )}
      </form>
    </div>
  );
}

export default WeatherForm;
