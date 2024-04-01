import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { Root } from "./react_router/Root";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
