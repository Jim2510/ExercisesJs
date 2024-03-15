import React, { useRef, useState } from "react";

export function TodoList() {
  const [todos, setTodos] = useState(["Prova1", "Prova2"]);
  const todoRef = useRef(null);

  function handleAddTodo() {
    const newTodo = todoRef.current.value;
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    todoRef.current.value = "";
  }

  return (
    <div>
      <input type="text" ref={todoRef} />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
