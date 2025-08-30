import { getLocationOrDefault } from "./locationHelper.ts";

const getUrl = (latitude: number, longitude: number): string => `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&zoom=10`;

export async function getLocationDetails(): Promise<LocationApiResponse> {
  const position = await getLocationOrDefault();
  const response = await fetch(getUrl(position.latitude, position.longitude));
  const now = new Date().toISOString();
  return { ...(await response.json()), fetchedAt: now };
}

interface Address {
  city?: string;
  state_district?: string;
  state?: string;
  "ISO3166-2-lvl4"?: string;
  postcode?: string;
  country?: string;
  country_code?: string;
}

interface ExtraTags {
  capital?: string;
  website?: string;
  wikidata?: string;
  wikipedia?: string;
  population?: string;
}

interface LocationDetails {
  place_id?: number;
  licence?: string;
  osm_type?: string;
  osm_id?: string;
  boundingbox?: string[];
  lat?: string;
  lon?: string;
  display_name?: string;
  class?: string;
  type?: string;
  importance?: number;
  icon?: string;
  address?: Address;
  extratags?: ExtraTags;
}

export interface LocationApiResponse extends LocationDetails {
  fetchedAt: string;
}
