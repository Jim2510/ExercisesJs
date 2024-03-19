import { useEffect, useState } from "react";
import { GitHubUser } from "./GitHubUser";

export function GitHubUsers() {
  const [user, setUser] = useState("");
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchUsername(username) {
    try {
      setLoading(true);
      const res = await fetch(`https://api.github.com/users/${username}`);
      if (res.ok) {
        const data = await res.json();
        setList((prevList) => [...prevList, data]);
      } else {
        throw new Error(res.status);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }
  //
  async function handleSubmit(event) {
    event.preventDefault();
    await fetchUsername(user);
    setUser("");
  }

  function handleChange(event) {
    setUser(event.target.value);
  }

  useEffect(() => {
    if (user) {
      fetchUsername(user);
    }
  }, [user]);

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={user}
            onChange={handleChange}
            placeholder="Enter GitHub username"
          />
          <button type="submit">Search</button>
        </form>
        {loading && <p>Loading...</p>}
        {list.map((userData) => (
          <GitHubUser key={userData.id} username={userData.login} />
        ))}
      </div>
    </>
  );
}
