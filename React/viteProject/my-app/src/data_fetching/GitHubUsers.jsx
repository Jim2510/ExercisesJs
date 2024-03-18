import { GitHubUser } from "./GitHubUser";

export function GitHubUsers() {
  return (
    <>
      <form action="">
        <input type="text" />
        <button type="submit">Search</button>
      </form>
      <ul>{GitHubUser}</ul>
    </>
  );
}
