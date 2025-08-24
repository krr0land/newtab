import { createApi } from "unsplash-js";
import { Random } from "unsplash-js/dist/methods/photos/types";

const apiKey = "M010d3BvaTdGMzlGM0N6NUZOLVIzR1FrVnptVHR6RDVJd2xmaHJqTGhWaw==";

const unsplash = createApi({
  accessKey: atob(apiKey),
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
