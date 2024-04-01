import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function GitHubUserList() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchGitHub() {
      try {
        setLoading(true);
        const res = await fetch("https://api.github.com/users");
        if (res.ok) {
          const data = await res.json();
          setUsers(data);
        } else {
          throw new Error(res.statusText);
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchGitHub();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error fetching data</p>
      ) : (
        <ul className="flex flex-col w-[400px] h-fit">
          {users.map((user, index) => (
            <li key={index}>
              <Link to={`/githubuser/${user.login}`}>{user.login}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
