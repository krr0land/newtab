import { createApi } from "unsplash-js";
import { Random } from "unsplash-js/dist/methods/photos/types";

const unsplash = createApi({
  accessKey: import.meta.env.VITE_UNSPLASH_API_KEY,
});

export interface PhotoApiResponse extends Random {
  fetchedAt: string;
}

export async function getRandomPhoto(): Promise<PhotoApiResponse | null> {
  const response = await unsplash.photos.getRandom({
    query: "nature",
    orientation: "landscape",
  });

  if (response.errors) {
    console.error("Unsplash API Error: ", response.errors);
    return null;
  }

  const now = new Date().toISOString();

  if (!response.response) return null;
  else if (Array.isArray(response.response)) return { ...response.response[0], fetchedAt: now };
  else return { ...response.response, fetchedAt: now };
}
