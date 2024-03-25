import { useGitHubUser } from "./useGitHubUser";

export function Guser({ username }) {
  const { data, loading, error, onFetchUser } = useGitHubUser(username);

  function handleGetUserData() {
    onFetchUser(username);
  }
  return (
    <>
      {loading && <h1>Loading...</h1>}
      {error && <h1>There has been an error</h1>}
      <button onClick={handleGetUserData}>Search</button>
      <img src={data.avatar_url} alt="" />
      <h3>{data.login}</h3>
      <h4>{data.name}</h4>
    </>
  );
}
