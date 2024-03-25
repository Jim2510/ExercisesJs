import { useState, useRef, useEffect } from "react";

const createFormData = () => {
  return {
    username: "",
    password: "",
    session: false,
  };
};

export function useControlledLogin() {
  const [data, setData] = useState(createFormData());

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const checked = event.target.checked;
    const type = event.target.type;

    setData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleReset = () => {
    setData(createFormData());
  };

  return {
    data,
    onInputChange: handleInputChange,
    onReset: handleReset,
    inputRef: inputRef,
  };
}
