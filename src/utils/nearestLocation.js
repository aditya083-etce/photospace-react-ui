import { LOCATION_COORDS } from "../data.js";

const toRad = (d) => (d * Math.PI) / 180;

function distanceKm([lat1, lon1], [lat2, lon2]) {
  const a =
    Math.sin(toRad(lat2 - lat1) / 2) ** 2 +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(toRad(lon2 - lon1) / 2) ** 2;
  return 6371 * 2 * Math.asin(Math.sqrt(a));
}

export function nearestLocation(lat, lon) {
  let best = { name: null, km: Infinity };
  for (const [name, coords] of Object.entries(LOCATION_COORDS)) {
    const km = distanceKm([lat, lon], coords);
    if (km < best.km) best = { name, km };
  }
  return best;
}
