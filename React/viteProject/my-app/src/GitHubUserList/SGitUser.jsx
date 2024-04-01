import { useParams } from "react-router-dom";
import { GitHubUser } from "./GitHubUser";

export function SGitUser() {
  const { username } = useParams();

  return (
    <div>
      <GitHubUser username={username} />
    </div>
  );
}
