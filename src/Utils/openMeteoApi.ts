// https://open-meteo.com/en/docs

//const url = "https://api.open-meteo.com/v1/forecast?latitude=56.157798&longitude=10.207232&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset&hourly=temperature_2m,weather_code,is_day&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,snowfall,showers,rain,precipitation,weather_code,cloud_cover,pressure_msl,surface_pressure,wind_gusts_10m,wind_direction_10m,wind_speed_10m&timezone=auto&past_days=1&forecast_days=14";

interface LatLong {
  latitude: number;
  longitude: number;
}

const aarhusLocation: LatLong = {
  latitude: 56.157798,
  longitude: 10.207232,
};

async function getLocation(): Promise<LatLong | undefined> {
  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition(
      (pos) => resolve(pos.coords),
      () => resolve(undefined)
    );
  });
}

const getUrl = (latitude: number, longitude: number): string =>
  `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset&hourly=temperature_2m,weather_code,is_day&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,snowfall,showers,rain,precipitation,weather_code,cloud_cover,pressure_msl,surface_pressure,wind_gusts_10m,wind_direction_10m,wind_speed_10m&timezone=auto&past_days=1&forecast_days=14`;

export async function getWeather(): Promise<WeatherApiResponse> {
  const position = (await getLocation()) || aarhusLocation;
  const response = await fetch(getUrl(position.latitude, position.longitude));
  return await response.json();
}

export interface WeatherApiResponse {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_units: WeatherUnits;
  current: CurrentWeather;
  hourly_units: HourlyUnits;
  hourly: HourlyWeather;
  daily_units: DailyUnits;
  daily: DailyWeather;
}

export interface WeatherUnits {
  time: string;
  interval: string;
  temperature_2m: string;
  relative_humidity_2m: string;
  apparent_temperature: string;
  is_day: string;
  snowfall: string;
  showers: string;
  rain: string;
  precipitation: string;
  weather_code: string;
  cloud_cover: string;
  pressure_msl: string;
  surface_pressure: string;
  wind_gusts_10m: string;
  wind_direction_10m: string;
  wind_speed_10m: string;
}

export interface CurrentWeather {
  time: string;
  interval: number;
  temperature_2m: number;
  relative_humidity_2m: number;
  apparent_temperature: number;
  is_day: number;
  snowfall: number;
  showers: number;
  rain: number;
  precipitation: number;
  weather_code: number;
  cloud_cover: number;
  pressure_msl: number;
  surface_pressure: number;
  wind_gusts_10m: number;
  wind_direction_10m: number;
  wind_speed_10m: number;
}

export interface HourlyUnits {
  time: string;
  temperature_2m: string;
  weather_code: string;
  is_day: string;
}

export interface HourlyWeather {
  time: string[];
  temperature_2m: number[];
  weather_code: number[];
  is_day: number[];
}

export interface DailyUnits {
  time: string;
  weather_code: string;
  temperature_2m_max: string;
  temperature_2m_min: string;
  sunrise: string;
  sunset: string;
}

export interface DailyWeather {
  time: string[];
  weather_code: number[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  sunrise: string[];
  sunset: string[];
}

export const DemoData: WeatherApiResponse = {
  latitude: 56.15868,
  longitude: 10.207993,
  generationtime_ms: 0.137567520141602,
  utc_offset_seconds: 3600,
  timezone: "Europe/Copenhagen",
  timezone_abbreviation: "GMT+1",
  elevation: 9,
  current_units: {
    time: "iso8601",
    interval: "seconds",
    temperature_2m: "°C",
    relative_humidity_2m: "%",
    apparent_temperature: "°C",
    is_day: "",
    snowfall: "cm",
    showers: "mm",
    rain: "mm",
    precipitation: "mm",
    weather_code: "wmo code",
    cloud_cover: "%",
    pressure_msl: "hPa",
    surface_pressure: "hPa",
    wind_gusts_10m: "km/h",
    wind_direction_10m: "°",
    wind_speed_10m: "km/h",
  },
  current: {
    time: "2025-03-25T21:00",
    interval: 900,
    temperature_2m: 9.1,
    relative_humidity_2m: 94,
    apparent_temperature: 5.3,
    is_day: 0,
    snowfall: 0,
    showers: 0,
    rain: 0,
    precipitation: 0,
    weather_code: 3,
    cloud_cover: 100,
    pressure_msl: 1013.4,
    surface_pressure: 1012.3,
    wind_gusts_10m: 39.6,
    wind_direction_10m: 288,
    wind_speed_10m: 23,
  },
  hourly_units: {
    time: "iso8601",
    temperature_2m: "°C",
    weather_code: "wmo code",
    is_day: "",
  },
  hourly: {
    time: [
      "2025-03-24T00:00",
      "2025-03-24T01:00",
      "2025-03-24T02:00",
      "2025-03-24T03:00",
      "2025-03-24T04:00",
      "2025-03-24T05:00",
      "2025-03-24T06:00",
      "2025-03-24T07:00",
      "2025-03-24T08:00",
      "2025-03-24T09:00",
      "2025-03-24T10:00",
      "2025-03-24T11:00",
      "2025-03-24T12:00",
      "2025-03-24T13:00",
      "2025-03-24T14:00",
      "2025-03-24T15:00",
      "2025-03-24T16:00",
      "2025-03-24T17:00",
      "2025-03-24T18:00",
      "2025-03-24T19:00",
      "2025-03-24T20:00",
      "2025-03-24T21:00",
      "2025-03-24T22:00",
      "2025-03-24T23:00",
      "2025-03-25T00:00",
      "2025-03-25T01:00",
      "2025-03-25T02:00",
      "2025-03-25T03:00",
      "2025-03-25T04:00",
      "2025-03-25T05:00",
      "2025-03-25T06:00",
      "2025-03-25T07:00",
      "2025-03-25T08:00",
      "2025-03-25T09:00",
      "2025-03-25T10:00",
      "2025-03-25T11:00",
      "2025-03-25T12:00",
      "2025-03-25T13:00",
      "2025-03-25T14:00",
      "2025-03-25T15:00",
      "2025-03-25T16:00",
      "2025-03-25T17:00",
      "2025-03-25T18:00",
      "2025-03-25T19:00",
      "2025-03-25T20:00",
      "2025-03-25T21:00",
      "2025-03-25T22:00",
      "2025-03-25T23:00",
      "2025-03-26T00:00",
      "2025-03-26T01:00",
      "2025-03-26T02:00",
      "2025-03-26T03:00",
      "2025-03-26T04:00",
      "2025-03-26T05:00",
      "2025-03-26T06:00",
      "2025-03-26T07:00",
      "2025-03-26T08:00",
      "2025-03-26T09:00",
      "2025-03-26T10:00",
      "2025-03-26T11:00",
      "2025-03-26T12:00",
      "2025-03-26T13:00",
      "2025-03-26T14:00",
      "2025-03-26T15:00",
      "2025-03-26T16:00",
      "2025-03-26T17:00",
      "2025-03-26T18:00",
      "2025-03-26T19:00",
      "2025-03-26T20:00",
      "2025-03-26T21:00",
      "2025-03-26T22:00",
      "2025-03-26T23:00",
      "2025-03-27T00:00",
      "2025-03-27T01:00",
      "2025-03-27T02:00",
      "2025-03-27T03:00",
      "2025-03-27T04:00",
      "2025-03-27T05:00",
      "2025-03-27T06:00",
      "2025-03-27T07:00",
      "2025-03-27T08:00",
      "2025-03-27T09:00",
      "2025-03-27T10:00",
      "2025-03-27T11:00",
      "2025-03-27T12:00",
      "2025-03-27T13:00",
      "2025-03-27T14:00",
      "2025-03-27T15:00",
      "2025-03-27T16:00",
      "2025-03-27T17:00",
      "2025-03-27T18:00",
      "2025-03-27T19:00",
      "2025-03-27T20:00",
      "2025-03-27T21:00",
      "2025-03-27T22:00",
      "2025-03-27T23:00",
      "2025-03-28T00:00",
      "2025-03-28T01:00",
      "2025-03-28T02:00",
      "2025-03-28T03:00",
      "2025-03-28T04:00",
      "2025-03-28T05:00",
      "2025-03-28T06:00",
      "2025-03-28T07:00",
      "2025-03-28T08:00",
      "2025-03-28T09:00",
      "2025-03-28T10:00",
      "2025-03-28T11:00",
      "2025-03-28T12:00",
      "2025-03-28T13:00",
      "2025-03-28T14:00",
      "2025-03-28T15:00",
      "2025-03-28T16:00",
      "2025-03-28T17:00",
      "2025-03-28T18:00",
      "2025-03-28T19:00",
      "2025-03-28T20:00",
      "2025-03-28T21:00",
      "2025-03-28T22:00",
      "2025-03-28T23:00",
      "2025-03-29T00:00",
      "2025-03-29T01:00",
      "2025-03-29T02:00",
      "2025-03-29T03:00",
      "2025-03-29T04:00",
      "2025-03-29T05:00",
      "2025-03-29T06:00",
      "2025-03-29T07:00",
      "2025-03-29T08:00",
      "2025-03-29T09:00",
      "2025-03-29T10:00",
      "2025-03-29T11:00",
      "2025-03-29T12:00",
      "2025-03-29T13:00",
      "2025-03-29T14:00",
      "2025-03-29T15:00",
      "2025-03-29T16:00",
      "2025-03-29T17:00",
      "2025-03-29T18:00",
      "2025-03-29T19:00",
      "2025-03-29T20:00",
      "2025-03-29T21:00",
      "2025-03-29T22:00",
      "2025-03-29T23:00",
      "2025-03-30T00:00",
      "2025-03-30T01:00",
      "2025-03-30T02:00",
      "2025-03-30T03:00",
      "2025-03-30T04:00",
      "2025-03-30T05:00",
      "2025-03-30T06:00",
      "2025-03-30T07:00",
      "2025-03-30T08:00",
      "2025-03-30T09:00",
      "2025-03-30T10:00",
      "2025-03-30T11:00",
      "2025-03-30T12:00",
      "2025-03-30T13:00",
      "2025-03-30T14:00",
      "2025-03-30T15:00",
      "2025-03-30T16:00",
      "2025-03-30T17:00",
      "2025-03-30T18:00",
      "2025-03-30T19:00",
      "2025-03-30T20:00",
      "2025-03-30T21:00",
      "2025-03-30T22:00",
      "2025-03-30T23:00",
      "2025-03-31T00:00",
      "2025-03-31T01:00",
      "2025-03-31T02:00",
      "2025-03-31T03:00",
      "2025-03-31T04:00",
      "2025-03-31T05:00",
      "2025-03-31T06:00",
      "2025-03-31T07:00",
      "2025-03-31T08:00",
      "2025-03-31T09:00",
      "2025-03-31T10:00",
      "2025-03-31T11:00",
      "2025-03-31T12:00",
      "2025-03-31T13:00",
      "2025-03-31T14:00",
      "2025-03-31T15:00",
      "2025-03-31T16:00",
      "2025-03-31T17:00",
      "2025-03-31T18:00",
      "2025-03-31T19:00",
      "2025-03-31T20:00",
      "2025-03-31T21:00",
      "2025-03-31T22:00",
      "2025-03-31T23:00",
    ],
    temperature_2m: [
      6, 5.5, 5.5, 5.2, 4.8, 4.5, 4.3, 4.2, 4.7, 5.1, 5.7, 7.6, 8.7, 9.7, 10.3, 10.4, 11.1, 10.1, 9.4, 8.5, 7.6, 7, 6.6, 6.1, 5.8, 5.1, 4.6, 4.3, 4.1, 4.7, 5.2, 5.6, 5.9, 6.8, 7.2, 7.3, 7.7, 8.3, 9.5, 10.7, 11, 10.5, 9.8, 9.3, 9.1, 9.2,
      8.6, 8.6, 8.5, 8.2, 7.9, 7.3, 6.8, 6.2, 5.8, 5.9, 6.6, 8, 9.6, 11, 12.2, 13.4, 14.2, 14.4, 14.3, 13.6, 12.3, 10.9, 9.7, 8.9, 8.2, 7.5, 7, 6.7, 6.3, 6.2, 6.6, 6.8, 6.9, 7.2, 8, 9.2, 10.7, 12.1, 13, 13.8, 14.5, 14.7, 14.7, 14.1, 13,
      11.8, 10.8, 9.7, 8.8, 8.2, 7.9, 7.7, 7.4, 7.3, 7.4, 7.2, 6.6, 7.3, 8.2, 9.1, 9.9, 10.5, 10.9, 10.9, 10.6, 9.9, 9.3, 8.9, 8.6, 8.2, 8, 7.8, 7.6, 7.2, 6.8, 6.4, 6.1, 5.6, 5.2, 4.8, 4.5, 4.7, 5.6, 6.9, 8.1, 8.9, 9.4, 9.6, 9.7, 9.6, 9.1,
      8.1, 6.8, 5.7, 4.8, 4.1, 3.5, 3.2, 2.9, 2.8, 3, 3.5, 3.9, 4.2, 4.5, 4.8, 4.9, 5.1, 5.3, 5.8, 6.2, 6.7, 7.1, 7.3, 7.3, 6.9, 6.3, 5.7, 5.1, 4.5, 4, 3.5, 3, 2.7, 2.5, 2.3, 2.3, 2.2, 2.2, 2.7, 4, 5.7, 7.2, 8.2, 9, 9.4, 9.5, 9.2, 8.9, 8.4,
      7.9, 7.3, 6.8, 6.3, 5.8, 5.3,
    ],
    weather_code: [
      2, 1, 1, 1, 1, 2, 3, 3, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 1, 3, 1, 1, 0, 3, 2, 2, 2, 3, 3, 3, 3, 3, 51, 53, 53, 53, 55, 53, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 0, 1, 3, 3, 0, 1, 3, 3, 2, 1, 1, 1, 2, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2,
      3, 2, 3, 3, 3, 2, 3, 3, 3, 3, 2, 2, 1, 2, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 51, 51, 51, 51, 51, 51, 2, 2, 2, 2, 1, 1, 1, 0, 0, 1, 1, 1, 51, 51, 51, 51, 51, 51, 0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 2, 2,
      3, 3, 51, 51, 51, 51, 51, 51, 2, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 2, 1, 1, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 0,
    ],
    is_day: [
      0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0,
    ],
  },
  daily_units: {
    time: "iso8601",
    weather_code: "wmo code",
    temperature_2m_max: "°C",
    temperature_2m_min: "°C",
    sunrise: "iso8601",
    sunset: "iso8601",
  },
  daily: {
    time: ["2025-03-24", "2025-03-25", "2025-03-26", "2025-03-27", "2025-03-28", "2025-03-29", "2025-03-30", "2025-03-31"],
    weather_code: [3, 55, 3, 3, 51, 51, 51, 2],
    temperature_2m_max: [11.1, 11, 14.4, 14.7, 10.9, 9.7, 7.3, 9.5],
    temperature_2m_min: [4.2, 4.1, 5.8, 6.2, 6.6, 3.2, 2.8, 2.2],
    sunrise: ["2025-03-24T06:09", "2025-03-25T06:06", "2025-03-26T06:04", "2025-03-27T06:01", "2025-03-28T05:59", "2025-03-29T05:56", "2025-03-30T05:53", "2025-03-31T05:51"],
    sunset: ["2025-03-24T18:41", "2025-03-25T18:43", "2025-03-26T18:45", "2025-03-27T18:47", "2025-03-28T18:49", "2025-03-29T18:51", "2025-03-30T18:53", "2025-03-31T18:55"],
  },
};
