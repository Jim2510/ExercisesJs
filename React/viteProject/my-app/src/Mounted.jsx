import { useEffect, useRef } from "react";

export function Mounted() {
  const mountedRef = useRef(false);

  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      console.log("Mounting for the first time");
    }
  });
  return (
    <>
      <button>Mount</button>
    </>
  );
}
