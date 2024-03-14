export function Age({ age }) {
  return <>{age >= 18 ? <p>Your age is {age}</p> : <p>You're too young</p>}</>;
}
