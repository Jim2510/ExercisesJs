import { Age } from "./Age";

export function Welcome({ name, age }) {
  const welcomeTitle = {
    fontSize: "40px",
  };

  return (
    <>
      <h2 style={welcomeTitle}>
        Welcome, <strong>{name}</strong>
      </h2>
      <Age age={age} />
    </>
  );
}
