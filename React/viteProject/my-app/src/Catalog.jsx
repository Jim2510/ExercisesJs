import { Link, Outlet } from "react-router-dom";

export function Catalog() {
  return (
    <div className="">
      <h2>ALL PRODUCTS</h2>
      <ul>
        <li>
          <Link to="/products/1">Product 1</Link>
        </li>
        <li>
          <Link to="/products/2">Product 2</Link>
        </li>
        <li>
          <Link to="/products/3">Product 3</Link>
        </li>
      </ul>
      <hr />
      <Outlet />
    </div>
  );
}
