import { Link, Route, Routes } from "react-router-dom";
import { SGitUser } from "./react_router/SGitUser";
import { Counter } from "./Counter";
import { Welcome } from "./Welcome";

export function App() {
  return (
    <>
      <Routes>
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/user/:username" element={<SGitUser />} />
        <Route path="*" element={<p>Not Found</p>} />
      </Routes>
      <div>
        <ul>
          <li>
            <Link to="/welcome">Welcome</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/user/:username">GithubUser</Link>
          </li>
          <li>
            <Link to="/prova">NotFound</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
