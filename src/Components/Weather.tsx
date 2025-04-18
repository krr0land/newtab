import { useEffect, useState } from "react";
import { getWeather, WeatherApiResponse } from "../Utils/openMeteoApi.ts";
import { weatherCodeMap } from "../Utils/weatherCodeMap.ts";
import Modal from "../Utils/Modal.tsx";

const dayOrNight = (isDay: number) => (isDay === 0 ? "night" : "day");

const degreeTo8Direction = (degree: number): string => {
  const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  degree = ((degree % 360) + 360) % 360;
  const index = Math.round(degree / 45) % 8;
  return directions[index];
};

export default function Weather() {
  const [data, setData] = useState<WeatherApiResponse | null>(null);
  useEffect(() => {
    const localData = localStorage.getItem("weather");
    if (localData) {
      const obj = JSON.parse(localData) as WeatherApiResponse;
      // if the data is newer than 1 hour, set it to the state
      const date = new Date(Date.parse(obj.current.time));
      const now = new Date();
      const diff = Math.abs(now.getTime() - date.getTime());
      const diffHours = Math.floor(diff / (1000 * 60 * 60));
      if (diffHours < 1) {
        setData(obj);
        return;
      }
    }
    // if the data is older than 1 hour or not found, fetch new data
    getWeather()
      .then((response) => {
        setData(response);
        localStorage.setItem("weather", JSON.stringify(response));
      })
      .catch((error) => console.error(error));
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  if (!data) return <div className="hidden" />;

  const code = data.current.weather_code.toString();
  // @ts-expect-error TS7053
  const weatherCode = weatherCodeMap[code][dayOrNight(data.current.is_day)];

  const dateCutoff = new Date(Date.parse(data.current.time));
  dateCutoff.setMinutes(0);
  const hourlyIdx = data.hourly.time
    .map((time, idx) => {
      const date = new Date(Date.parse(time));
      if (date >= dateCutoff) return idx;
      else return -1;
    })
    .filter((idx) => idx !== -1)
    .slice(0, 24);

  const dailyIdx = data.daily.time.map((_, idx) => idx).slice(1);

  return (
    <>
      <div className="md:absolute top-4 right-4 bg-gray-600/30 p-1 pl-2 pr-3 rounded-xl" onClick={() => setIsOpen(true)}>
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

      <Modal open={isOpen} onClose={() => setIsOpen(!isOpen)} title="Weather Forecast">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {/*Current weather*/}
          <Tile title="Current weather" center>
            <img src={"weather/" + weatherCode.icon} alt="" className="w-24 mt-[-20px]" />
            <p className="mt-[-12px] text-lg">{weatherCode.description}</p>
          </Tile>
          <Tile title="Temperature" center>
            <p className="text-4xl font-bold">
              {data.current.temperature_2m}
              {data.current_units.temperature_2m}
            </p>
            <p>
              Min: {data.daily.temperature_2m_min[1]}
              {data.daily_units.temperature_2m_min}
            </p>
            <p>
              Max: {data.daily.temperature_2m_max[1]}
              {data.daily_units.temperature_2m_max}
            </p>
          </Tile>
          <Tile title="Apparent Temp." center>
            <p className="text-4xl font-bold">
              {data.current.apparent_temperature}
              {data.current_units.temperature_2m}
            </p>
            {data.current.apparent_temperature - data.current.temperature_2m > 0 ? <p className="text-md m-1">Feels warmer</p> : <p className="text-md m-1">Feels colder</p>}
          </Tile>
          <Tile title="Precipitation">
            {/*Todo: maybe change this from current to daily metric*/}
            <p>
              Total: {data.current.precipitation} {data.current_units.precipitation}
            </p>
            <p>
              {
                // Out of Snow, Showers and Rain, show the highest value with a label and corresponding unit
                data.current.snowfall > data.current.rain
                  ? "Snow: " + data.current.snowfall + " " + data.current_units.snowfall
                  : data.current.showers > data.current.rain
                    ? "Showers: " + data.current.showers + " " + data.current_units.showers
                    : "Rain: " + data.current.rain + " " + data.current_units.rain
              }
            </p>
            <p>
              Humidity: {data.current.relative_humidity_2m} {data.current_units.relative_humidity_2m}
            </p>
          </Tile>
          <Tile title="Wind">
            <p>
              Wind: {data.current.wind_speed_10m} {data.current_units.wind_speed_10m}
            </p>
            <p>
              Gust: {data.current.wind_gusts_10m} {data.current_units.wind_gusts_10m}
            </p>
            <p>
              Dir: {data.current.wind_direction_10m}
              {data.current_units.wind_direction_10m} ({degreeTo8Direction(data.current.wind_direction_10m)})
            </p>
          </Tile>
          <Tile title="Sunrise / Sunset" center>
            <p>Sunrise: {new Date(Date.parse(data.daily.sunrise[1])).toTimeString().slice(0, 5)}</p>
            <p>Sunset: {new Date(Date.parse(data.daily.sunset[1])).toTimeString().slice(0, 5)}</p>
          </Tile>
        </div>
        {/*Hourly weather*/}
        <div className="h-2" />
        <TileWide title="Hourly Forecast">
          {hourlyIdx.map((index, _idx) => (
            <MiniWeatherWidget
              key={index}
              wmo_code={data.hourly.weather_code[index]}
              time={_idx === 0 ? "Now" : new Date(Date.parse(data.hourly.time[index])).getHours().toString()}
              temp={data.hourly.temperature_2m[index]}
              is_day={data.hourly.is_day[index]}
            />
          ))}
        </TileWide>
        {/*Daily weather*/}
        <div className="h-2" />
        <TileWide title="Daily Forecast">
          {dailyIdx.map((index, _idx) => (
            <MiniWeatherWidget
              key={index}
              wmo_code={data.daily.weather_code[index]}
              time={_idx === 0 ? "Today" : new Date(Date.parse(data.daily.time[index])).toDateString().slice(4, -5)}
              min_temp={data.daily.temperature_2m_min[index]}
              max_temp={data.daily.temperature_2m_max[index]}
              is_day={1}
            />
          ))}
        </TileWide>
        <p className="mt-2 italic">Last updated: {new Date(Date.parse(data.current.time)).toLocaleString()}</p>
      </Modal>
    </>
  );
}

function Tile(props: { children?: React.ReactNode; title?: string; center?: boolean }) {
  return (
    <div className="bg-zinc-600 w-36 h-36 rounded-lg">
      {props.title && <p className="text-sm mt-1 ml-2 text-zinc-800 font-semibold">{props.title}</p>}
      {props.center ? <div className="flex flex-col justify-center items-center gap-1 mt-2">{props.children}</div> : <div className="flex flex-col gap-1 ml-2 mt-2">{props.children}</div>}
    </div>
  );
}

function TileWide(props: { children?: React.ReactNode; title?: string }) {
  return (
    <div className="bg-zinc-600 w-[296px] md:w-[448px] h-36 rounded-lg">
      {props.title && <p className="text-sm mt-1 ml-2 text-zinc-800 font-semibold">{props.title}</p>}
      <div className="flex gap-1 m-3 justify-between overflow-x-auto scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent">{props.children}</div>
    </div>
  );
}

function MiniWeatherWidget(props: { wmo_code: number; time: string; temp?: number; min_temp?: number; max_temp?: number; is_day: number }) {
  // @ts-expect-error TS7053
  const weatherCode = weatherCodeMap[props.wmo_code][dayOrNight(props.is_day)];
  return (
    <div className="flex flex-col items-center min-w-11 mb-2">
      <p className="text-sm text-nowrap">{props.time}</p>
      <img src={"weather/" + weatherCode.icon} alt={weatherCode.description} className="w-10" />
      {props.temp && <p className="text-sm">{props.temp}°</p>}
      {props.min_temp && props.max_temp && (
        <p className="text-sm">
          {props.min_temp.toFixed()}-{props.max_temp.toFixed()}°
        </p>
      )}
    </div>
  );
}
