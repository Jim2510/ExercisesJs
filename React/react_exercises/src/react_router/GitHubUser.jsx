import { useEffect, useState } from "react";

export function GithubUser({ username }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchGithubUser(username) {
      if (!username) return;
      try {
        const res = await fetch(`https://api.github.com/users/${username}`);
        if (res.ok) {
          const data = await res.json();
          setUser(data);
        } else {
          throw new Error(res.statusText);
        }
      } catch (error) {
        setError(error.message);
      }
    }

    fetchGithubUser(username);

    return () => {
      setUser(null);
      setError(null);
    };
  }, [username]);

  return (
    <div>
      {user && (
        <>
          <div>{user.login}</div>
          <div>{user.name}</div>
          <img src={user.avatar_url} alt={user.login} />
        </>
      )}
      {error && <div>{error}</div>}
    </div>
  );
}
