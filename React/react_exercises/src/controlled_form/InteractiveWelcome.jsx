import { Welcome2 } from "../conditional_rendering/Welcome2";

export function InteractiveWelcome() {
  return (
    <>
      <input type="text" />
      <Welcome2 name="Filippo2" age={26} />
    </>
  );
}
