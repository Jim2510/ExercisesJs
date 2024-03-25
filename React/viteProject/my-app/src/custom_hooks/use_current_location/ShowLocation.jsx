import { useEffect } from "react";
import { useCurrentLocation } from "./useCurrentLocation";

export function ShowLocation() {
  const { data, onGeoloc, error, loading } = useCurrentLocation();
  useEffect(() => onGeoloc(location), []);

  console.log(data);
  return (
    <>
      {data && (
        <h1>
          {data.longitude}
          {data.latitude}
          {loading && <p>Loading...</p>}
          {error && <p>Error</p>}
        </h1>
      )}
    </>
  );
}
