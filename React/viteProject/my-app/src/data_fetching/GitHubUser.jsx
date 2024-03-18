import { useEffect, useState } from "react";

export function GitHubUser({ username = "Jim2510" }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchGithubUser() {
    try {
      const response = await fetch(`https://api.github.com/users/`);
      if (response.ok) {
        const data = await response.json();
        setUser(data);
      } else {
        throw new Error(response.status);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  console.log(user);

  useEffect(() => fetchGithubUser, []);

  return (
    <>
      <ul></ul>
    </>
  );
}
