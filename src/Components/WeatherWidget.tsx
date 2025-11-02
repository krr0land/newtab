import { weatherCodeMap } from "../Utils/weatherCodeMap.ts";
import { routes } from "../routes.ts";
import { Link } from "react-router";
import { useAtomValue } from "jotai/index";
import { weatherAtom, locationAtom } from "../atoms.ts";

const dayOrNight = (isDay: number) => (isDay === 0 ? "night" : "day");

export default function WeatherWidget() {
  const data = useAtomValue(weatherAtom);
  const location = useAtomValue(locationAtom);
  if (!data) return <div className="hidden" />;

  const code = data.current.weather_code.toString();
  // @ts-expect-error TS7053
  const weatherCode = weatherCodeMap[code][dayOrNight(data.current.is_day)];

  const dateCutoff = new Date(Date.parse(data.current.time));
  dateCutoff.setMinutes(0);

  return (
    <Link to={routes.WEATHER} className="absolute top-0 right-0 bg-gray-400/70 dark:bg-gray-800/80 py-1 px-2 rounded-bl-xl backdrop-blur-xs">
      <div className="flex items-center">
        <img src={"weather/" + weatherCode.icon} alt={weatherCode.description} className="w-14" />
        <div className="w-18">
          <p className="text-lg font-bold text-center">
            {data.current.temperature_2m} {data.current_units.temperature_2m}
          </p>
          {location && <p className="text-xs text-center">{location.address?.city}</p>}
        </div>
      </div>
    </Link>
  );
}
