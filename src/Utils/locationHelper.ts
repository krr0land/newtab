export interface LatLong {
  latitude: number;
  longitude: number;
}

export const aarhusLocation: LatLong = {
  latitude: 56.157798,
  longitude: 10.207232,
};

export async function getLocation(): Promise<LatLong | undefined> {
  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition(
      (pos) => resolve(pos.coords),
      () => resolve(undefined)
    );
  });
}

export async function getLocationOrDefault(): Promise<LatLong> {
  const loc = await getLocation();
  if (loc) return loc;
  else return aarhusLocation;
}
