import { Age2 } from "../conditional_rendering/Age2";

export function Welcome2({ name, age }) {
  const welcomeTitle = {
    fontSize: "40px",
  };

  return (
    <>
      <h2 style={welcomeTitle}>
        Welcome, <strong>{name}</strong>
      </h2>
      {!!age && <Age2 age={age} />}
      {age >= 18 && <Age2 age={age} />}
      {age && <Age2 age={age} />}
      {age >= 18 && age <= 65 && <Age2 age={age} />}
      {age >= 18 && age <= 65 && name === "John" && <Age2 age={age} />}
    </>
  );
}
