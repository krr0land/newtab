import { weatherCodeMap } from "../Utils/weatherCodeMap.ts";
import { WeatherApiResponse } from "../Utils/openMeteoApi.ts";
import { routes } from "../routes.ts";
import { Link } from "react-router";

const dayOrNight = (isDay: number) => (isDay === 0 ? "night" : "day");

export default function WeatherWidget(props: { weatherData: WeatherApiResponse | null }) {
  const data = props.weatherData;
  if (!data) return <div className="hidden" />;

  const code = data.current.weather_code.toString();
  // @ts-expect-error TS7053
  const weatherCode = weatherCodeMap[code][dayOrNight(data.current.is_day)];

  const dateCutoff = new Date(Date.parse(data.current.time));
  dateCutoff.setMinutes(0);

  return (
    <Link to={routes.WEATHER} className="md:absolute top-4 right-4 bg-gray-600/30 p-1 pl-2 pr-3 rounded-xl">
      <div className="flex items-center">
        <img src={"weather/" + weatherCode.icon} alt={weatherCode.description} className="w-16" />
        <div className="w-18">
          <p className="text-xl font-bold text-center">
            {data.current.temperature_2m} {data.current_units.temperature_2m}{" "}
          </p>
          <p className="text-xs text-center">
            {data.current.apparent_temperature} {data.current_units.temperature_2m}
          </p>
        </div>
      </div>
    </Link>
  );
}
