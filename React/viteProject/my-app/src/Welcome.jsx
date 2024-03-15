import { Age } from "./Age";
import "./index.css";

export function Welcome({ name }) {
  return (
    <div className="welcome">
      <h2>
        Welcome, <strong>{name}</strong>!
      </h2>
      <Age age={29} />
    </div>
  );
}
