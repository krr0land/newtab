import { atom } from "jotai";
import { Theme } from "./Utils/themes.ts";
import { WeatherApiResponse } from "./Utils/openMeteoApi.ts";
import { PhotoApiResponse } from "./Utils/unsplashApi.ts";
import { LocationApiResponse } from "./Utils/nominatimApi.ts";

export const themeAtom = atom<Theme>("dark");
export const colorSchemeAtom = atom<number>(Math.floor(Math.random() * 10));
export const weatherAtom = atom<WeatherApiResponse | null>(null);
export const randomPhotoAtom = atom<PhotoApiResponse | null>(null);
export const locationAtom = atom<LocationApiResponse | null>(null);
