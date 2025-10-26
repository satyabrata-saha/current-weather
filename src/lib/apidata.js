const weatherApiData = async (city) => {
  const apiKey = process.env.NEXT_PUBLIC_APIKEY || "";
  console.log(apiKey);

  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

  if (!city) {
    return null;
  }

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
};
export default weatherApiData;
