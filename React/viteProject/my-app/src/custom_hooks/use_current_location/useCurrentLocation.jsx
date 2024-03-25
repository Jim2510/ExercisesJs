import { useState } from "react";

export function useCurrentLocation() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  function getLocation() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        if (position) {
          setLoading(false);
          setData({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        } else {
          setError(true);
        }
      },
      (error) => {
        setLoading(false);
        setError(error);
      }
    );
  }

  return {
    data,
    onGeoloc: getLocation,
    Error: error,
    loading: loading,
  };
}
