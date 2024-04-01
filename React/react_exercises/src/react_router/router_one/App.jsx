import { Route, Routes } from "react-router-dom";
import { GithubUser } from "./GitHubUser";

export function App() {
  return (
    <Routes>
      <Route path="/githubuser/:username" element={<GithubUser />} />
    </Routes>
  );
}
