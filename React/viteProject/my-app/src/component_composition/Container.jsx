import { useState } from "react";

export function Container({ title, children }) {
  const [collapsed, setCollapse] = useState(false);

  function handleCollapse() {
    setCollapse((t) => !t);
  }

  return (
    <>
      <div className="bg-red-500 border-2 border-red-800">
        <div className="flex justify-between items-center">
          {title}
          <button onClick={handleCollapse} className="p-2 bg-red-900">
            Toggle
          </button>
        </div>
        <div className={collapsed ? "block" : " hidden"}>{children}</div>
      </div>
    </>
  );
}
