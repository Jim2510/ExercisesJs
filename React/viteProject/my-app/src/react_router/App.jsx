import { Link, Route, Routes } from "react-router-dom";
import { Container } from "../src/component_composition/Container";
import { Welcome } from "./Welcome";
import { Login } from "./Login";
import { Catalog } from "./Catalog";
import { Product } from "./Product";
import { Counter } from "../Counter";
import { GitHubUsers } from "./GitHubUser";
import { SGitUser } from "./SGitUser";

export function App() {
  return (
    <>
      <Routes>
        <Route path="/users/:username" element={<SGitUser />} />
      </Routes>
    </>
  );
}
