import { useControlledLogin } from "./useControlledLogin";

export function Form() {
  const { data, onInputChange, onReset, inputRef } = useControlledLogin();
  return (
    <>
      <h1>My Form</h1>
      <input
        ref={inputRef}
        name="username"
        value={data.username}
        onChange={onInputChange}
      />
      <input
        name="password"
        type="password"
        value={data.password}
        onChange={onInputChange}
      />
      <input
        checked={data.session}
        type="checkbox"
        name="session"
        onChange={onInputChange}
        id=""
      />
      <button disabled={!data.username || !data.password}>Login</button>
      <button onClick={onReset}>Reset</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}
