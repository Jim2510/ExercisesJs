import { Link, useNavigate, useParams } from "react-router-dom";
import { Age } from "./Age";
import "./index.css";

export function Welcome() {
  const navigate = useNavigate();
  const { name } = useParams();

  function handleChange() {
    navigate("/login");
  }

  return (
    <div className="welcome">
      <h2>
        Welcome, <strong>{name}</strong>!
      </h2>
      <Age age={29} />
      <Link to="/login">Go to login</Link>
      <button onClick={handleChange}>Go to login</button>
    </div>
  );
}
