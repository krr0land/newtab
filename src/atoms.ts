import { atom } from "jotai";
import { Theme } from "./Utils/themes.ts";
import { WeatherApiResponse } from "./Utils/openMeteoApi.ts";

export const themeAtom = atom<Theme>("system");
export const colorSchemeAtom = atom<number>(Math.floor(Math.random() * 10));
export const weatherAtom = atom<WeatherApiResponse | null>(null);
