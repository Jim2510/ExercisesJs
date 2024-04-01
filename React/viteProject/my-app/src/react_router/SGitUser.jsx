import { useParams } from "react-router-dom";
import { GithubUser } from "./GitHubUser";

export function SGitUser() {
  const { user } = useParams();

  return (
    <>
      <GithubUser username={user} />
    </>
  );
}
