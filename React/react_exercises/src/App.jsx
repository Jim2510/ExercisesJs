// import { Route, Routes } from "react-router-dom";
// import { GitHubUserList } from "./react_router/GitHubUserList";
// import { ShowGitHubUser } from "./react_router/router_one/ShowGitHubUser";

// export function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<ShowGitHubUser />} />
//       <Route path="/githubuserlist" element={<GitHubUserList />} />
//       <Route path="/githubuser/:username" element={<ShowGitHubUser />} />
//     </Routes>
//   );
// }

import { Route, Routes } from "react-router-dom";
import { ShowGitHubUser } from "../src/react_router/router_one/ShowGitHubUser";

export function App() {
  return (
    <Routes>
      <Route path="/githubuser/:username" element={<ShowGitHubUser />} />
    </Routes>
  );
}
