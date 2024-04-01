import { useState } from "react";
import { Link } from "react-router-dom";

const createForm = () => {
  return {
    username: "",
    password: "",
    session: false,
  };
};

export function Login({ onLogin }) {
  const [data, setData] = useState(createForm());

  const handleChange = (event) => {
    const name = event.target.name;
    const type = event.target.type;
    const value = event.target.value;
    const checked = event.target.checked;

    setData((data) => {
      return {
        ...data,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  };

  const handleReset = () => {
    setData(createForm());
  };

  function handleLogin(event) {
    event.preventDefault();
    console.log(data);
    onLogin(data);
  }

  return (
    <>
      <form
        onSubmit={handleLogin}
        action=""
        className="flex justify-center items-center "
      >
        <input
          className="border-solid border-black border p-3"
          name="username"
          type="text"
          value={data.username}
          onChange={handleChange}
        />
        <input
          className="border-solid border-black border p-3"
          name="password"
          type="password"
          value={data.password}
          onChange={handleChange}
        />
        <input
          className="m-3"
          name="session"
          type="checkbox"
          value={data.session}
          onChange={handleChange}
        />
        <button
          className="border-solid border-black border p-3"
          disabled={!data.username || !data.password}
        >
          Login
        </button>
        <button
          className="border-solid border-black border p-3"
          onClick={handleReset}
        >
          Reset
        </button>
        <Link to="/welcome">Back to homepage</Link>
      </form>
    </>
  );
}
