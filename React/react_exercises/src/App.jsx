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

// import { Route, Routes } from "react-router-dom";
import { ShowGitHubUser } from "../src/react_router/router_one/ShowGitHubUser";
import { Welcome2 } from "./conditional_rendering/Welcome2";
import { InteractiveWelcome } from "./controlled_form/InteractiveWelcome";
import { AlertClock } from "./events/AlertClock";
import { MouseClicker } from "./handling_events/MouseClicker";
import { Welcome } from "./props/Welcome";
import { GHUserList } from "./react_router/router_two/GHUserList";
import { Counter } from "./state/Counter";
import { Counter2 } from "./use_effect/Counter2";
import { Clock } from "./use_effect2/Clock";

export function App() {
  return (
    // <Routes>
    //   <Route path="/users" element={<GHUserList />} />
    //   <Route path="/githubuser/:username" element={<ShowGitHubUser />} />
    // </Routes>
    <>
      <Welcome2 name="Filippo" age={14} />
      <AlertClock />
      <Counter2 />
      <Clock />
      <MouseClicker />
      <InteractiveWelcome />
    </>
  );
}
