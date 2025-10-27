import React from "react";
import Image from "next/image";

const WeatherDisplay = ({ weatherData }) => {
  if (!weatherData) {
    return null;
  }

  const { location, current } = weatherData;

  const iconUrl = current?.condition.icon.startsWith("//")
    ? `https:${current?.condition.icon}`
    : current?.condition.icon;

  return (
    <div className="font-sans max-w-sm w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mx-auto my-5">
      {/* Location Information */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          {location?.name}
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {location?.region}, {location?.country}
        </p>
        <p className="text-xs text-gray-400 dark:text-gray-500 mt-2">
          Local Time: {location?.localtime}
        </p>
      </div>

      {/* Current Weather Condition */}
      <div className="flex items-center justify-between my-5">
        <div className="flex items-center">
          <Image
            src={iconUrl}
            alt={current?.condition.text}
            width={64}
            height={64}
            unoptimized
          />
          <div className="ml-4">
            <div className="text-4xl font-extrabold text-gray-900 dark:text-white">
              {current?.temp_c}°C
            </div>
            <div className="text-gray-600 dark:text-gray-300 capitalize">
              {current?.condition.text}
            </div>
          </div>
        </div>
        <div className="text-right">
          <span
            className={`px-2 py-1 text-xs font-semibold rounded-full ${
              current?.is_day
                ? "bg-yellow-100 text-yellow-800"
                : "bg-indigo-100 text-indigo-800"
            }`}
          >
            {current?.is_day ? "Day" : "Night"}
          </span>
        </div>
      </div>

      {/* --- Key Metrics Group --- */}
      <div className="space-y-2 text-sm">
        <h3 className="font-semibold text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700 pb-1 mb-2">
          Key Metrics
        </h3>
        <DetailRow label="Feels Like" value={`${current?.feelslike_c}°C`} />
        <DetailRow label="Wind Chill" value={`${current?.windchill_c}°C`} />
        <DetailRow label="Heat Index" value={`${current?.heatindex_c}°C`} />
        <DetailRow label="Dew Point" value={`${current?.dewpoint_c}°C`} />
      </div>

      {/* --- Wind Group --- */}
      <div className="space-y-2 text-sm mt-4">
        <h3 className="font-semibold text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700 pb-1 mb-2">
          Wind
        </h3>
        <DetailRow
          label="Speed"
          value={`${current?.wind_kph} kph (${current?.wind_dir})`}
        />
        <DetailRow label="Degree" value={`${current?.wind_degree}°`} />
        <DetailRow label="Gust" value={`${current?.gust_kph} kph`} />
      </div>

      {/* --- Atmosphere Group --- */}
      <div className="space-y-2 text-sm mt-4">
        <h3 className="font-semibold text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700 pb-1 mb-2">
          Atmosphere
        </h3>
        <DetailRow label="Humidity" value={`${current?.humidity}%`} />
        <DetailRow label="Cloud Cover" value={`${current?.cloud}%`} />
        <DetailRow label="Pressure" value={`${current?.pressure_mb} mb`} />
        <DetailRow label="Precipitation" value={`${current?.precip_mm} mm`} />
        <DetailRow label="Visibility" value={`${current?.vis_km} km`} />
        <DetailRow label="UV Index" value={current?.uv} />
      </div>

      {/* --- Location & Time Group --- */}
      <div className="space-y-2 text-sm mt-4">
        <h3 className="font-semibold text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700 pb-1 mb-2">
          Location & Time
        </h3>
        <DetailRow
          label="Coordinates"
          value={`${location?.lat}, ${location?.lon}`}
        />
        <DetailRow label="Timezone" value={location?.tz_id} />
        <DetailRow label="Last Updated" value={current?.last_updated} />
        <DetailRow label="Condition Code" value={current?.condition.code} />
      </div>
    </div>
  );
};

const DetailRow = ({ label, value }) => (
  <div className="flex justify-between">
    <span className="font-medium text-gray-500 dark:text-gray-400">
      {label}
    </span>
    <span className="font-semibold text-gray-800 dark:text-white">{value}</span>
  </div>
);

export default WeatherDisplay;
