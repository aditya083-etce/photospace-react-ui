import { useEffect, useState } from "react";
import { nearestLocation } from "../utils/nearestLocation.js";

const MAX_KM = 150;

export function useGpsLocation(enabled) {
  const [state, setState] = useState({ detected: null, status: "idle" });

  useEffect(() => {
    if (!enabled) {
      setState({ detected: null, status: "idle" });
      return;
    }
    if (!navigator.geolocation) {
      setState({ detected: null, status: "unsupported" });
      return;
    }

    setState((s) => ({ ...s, status: "loading" }));

    const id = navigator.geolocation.watchPosition(
      ({ coords }) => {
        const { name, km } = nearestLocation(coords.latitude, coords.longitude);
        setState(
          km > MAX_KM
            ? { detected: null, status: "far" }
            : { detected: name, status: "active" },
        );
      },
      (err) =>
        setState({
          detected: null,
          status: err.code === 1 ? "denied" : "error",
        }),
      { enableHighAccuracy: false, maximumAge: 30000, timeout: 20000 },
    );

    return () => navigator.geolocation.clearWatch(id);
  }, [enabled]);

  return state;
}
