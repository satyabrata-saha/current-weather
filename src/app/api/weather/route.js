import { NextResponse } from "next/server";

export async function GET() {}

export async function POST(request = NextRequest) {
  const searchData = await request.json();
  const city = searchData.city;

  const apiKey = process.env.APIKEY || "";

  const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;

  if (!city) {
    return null;
  }

  try {
    const response = await fetch(url);
    const data = await response.json();

    return NextResponse.json({
      status: 200,
      message: "Data Fetched Successfully",
      data: data,
    });
  } catch (error) {
    // console.error("Error fetching weather data:", error);
    return NextResponse.json({
      status: 500,
      message: "Something went wrong while fetching data",
      error: error.message,
    });
  }
}
