export function Age2({ age }) {
  const welcomeAge = {
    fontSize: "24px",
  };

  return (
    <>
      {age >= 18 ? (
        <p style={welcomeAge}>Your age is {age}</p>
      ) : (
        <p style={welcomeAge}>You're too young</p>
      )}
    </>
  );
}
