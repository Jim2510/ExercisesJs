import { useEffect, useState } from "react";
export function useGitHubUser(username) {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchUsername() {
    setLoading(true);
    setError(false);
    try {
      setLoading(true);
      const res = await fetch(`https://api.github.com/users/${username}`);
      if (res.ok) {
        const data = await res.json();
        setData(data);
      } else {
        throw new Error(res.status);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  return { data, error, loading, onFetchUser: fetchUsername };
}
