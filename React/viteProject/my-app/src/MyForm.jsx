import { useEffect, useRef, useState } from "react";

const createFormData = () => {
  return {
    username: "",
    password: "",
    session: false,
  };
};

export function MyForm() {
  const [data, setData] = useState(createFormData());

  const inputRef = useRef(null);

  console.log(inputRef);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleusernameInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const checked = event.target.checked;
    const type = event.target.type;

    setData((data) => {
      return {
        ...data,
        [name]: type === "checkbox" ? checked : value,
      };
    });

    console.log(value);
  };

  const handleReset = () => {
    setData(createFormData());
  };

  return (
    <>
      <h1>My Form</h1>
      <input
        ref={inputRef}
        name="username"
        value={data.username}
        onChange={handleusernameInputChange}
      />
      <input
        name="password"
        type="password"
        value={data.password}
        onChange={handleusernameInputChange}
      />
      <input
        checked={data.session}
        type="checkbox"
        name="session"
        onChange={handleusernameInputChange}
        id=""
      />
      <button disabled={!data.username || !data.password}>Login</button>
      <button onClick={handleReset}>Reset</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}
