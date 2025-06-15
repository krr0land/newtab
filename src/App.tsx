import Searchbar from "./Components/Searchbar";
import LinkContainer from "./Components/LinkContainer.tsx";
import Background from "./Components/Background.tsx";
import WeatherWidget from "./Components/WeatherWidget.tsx";
import { Route, Routes } from "react-router";
import { routes } from "./routes.ts";
import { useEffect, useState } from "react";
import { getWeather, WeatherApiResponse } from "./Utils/openMeteoApi.ts";
import Weather from "./Components/Weather.tsx";
import NavBar from "./Components/NavBar.tsx";
import Settings from "./Components/Settings.tsx";
import { Theme } from "./Utils/themes.ts";

export default function App() {
  const [weatherData, setWeatherData] = useState<WeatherApiResponse | null>(null);
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
        setWeatherData(obj);
        return;
      }
    }
    // if the data is older than 1 hour or not found, fetch new data
    getWeather()
      .then((response) => {
        setWeatherData(response);
        localStorage.setItem("weather", JSON.stringify(response));
      })
      .catch((error) => console.error(error));
  }, []);

  const [theme, setTheme] = useState<Theme>("system");
  const [colorScheme, setColorScheme] = useState<number>(Math.floor(Math.random() * 10));

  return (
    <div className="flex flex-col justify-center items-center gap-2 w-fit m-auto pt-20 box-border overflow-hidden text-white">
      <Background currentColorScheme={colorScheme} currentTheme={theme} />
      <NavBar />

      <Routes>
        <Route
          path={routes.HOME}
          element={
            <>
              <WeatherWidget weatherData={weatherData} />
              <Searchbar />
              <div className="h-8" />
              <LinkContainer />
            </>
          }
        />
        <Route
          path={routes.WEATHER}
          element={
            <>
              <Weather weatherData={weatherData} />
            </>
          }
        />
        <Route
          path={routes.SETTINGS}
          element={
            <>
              <Settings currentColorScheme={colorScheme} currentTheme={theme} setColorScheme={setColorScheme} setTheme={setTheme} />
            </>
          }
        />
        <Route path={routes.ANY} element={<div>Page not found</div>} />
      </Routes>
    </div>
  );
}
