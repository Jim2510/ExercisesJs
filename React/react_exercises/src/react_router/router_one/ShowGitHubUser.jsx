import { useParams } from "react-router-dom";
import { GithubUser } from "./GitHubUser";

// Avevo lasciato il componente nella cartella src

export function ShowGitHubUser() {
  const { username } = useParams();

  return (
    <div>
      <GithubUser username={username} />
    </div>
  );
}
