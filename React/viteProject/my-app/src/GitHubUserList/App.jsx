import { Route, Routes } from "react-router-dom";
import { GitHubUserList } from "./GitHubUserList";
import { SGitUser } from "./SGitUser";

export function App() {
  return (
    <Routes>
      <Route path="/githubuserlist" element={<GitHubUserList />} />
      <Route path="/githubuser/:username" element={<SGitUser />} />
    </Routes>
  );
}
