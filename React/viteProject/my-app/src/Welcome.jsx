import { Age } from "./Age";

export function Welcome({ name }) {
  return (
    <div>
      <h2>Welcome, <strong>{name}</strong>!</h2>
      <Age age={29} />
    </div>
  );
}
