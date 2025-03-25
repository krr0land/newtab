import { useEffect, useState } from "react";
import { DemoData, getWeather, WeatherApiResponse } from "../Utils/openMeteoApi.ts";
import { weatherCodeMap } from "../Utils/weatherCodeMap.ts";

const dayOrNight = (isDay: number) => (isDay === 0 ? "night" : "day");

export default function Weather() {
  const [data, setData] = useState<WeatherApiResponse | null>(DemoData);
  //useEffect(() => {
  //  getWeather()
  //    .then((response) => setData(response))
  //    .catch((error) => console.error(error));
  //}, []);

  if (!data) return <div className="hidden" />;

  const code = data.current.weather_code.toString();
  // @ts-expect-error TS7053
  const weatherCode = weatherCodeMap[code][dayOrNight(data.current.is_day)];

  return (
    <div className="absolute top-4 right-4 bg-gray-600/30 pl-2 pr-3 rounded-xl">
      <div className="flex items-center">
        <img src={"weather/" + weatherCode.icon} alt={weatherCode.description} className="w-16" />
        <div className="w-16">
          <p className="text-xl font-bold text-center">
            {data.current.temperature_2m} {data.current_units.temperature_2m}{" "}
          </p>
          <p className="text-xs text-center">
            {data.current.apparent_temperature} {data.current_units.temperature_2m}
          </p>
        </div>
      </div>
    </div>
  );
}
