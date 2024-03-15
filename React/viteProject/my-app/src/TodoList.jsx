import { useRef, useState } from "react";

export function TodoList() {
  const [todos, setTodos] = useState([]);
  const todoRef = useRef(null);

  function handleAddTodo() {
    const newTodo = todoRef.current.value;
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    todoRef.current.value = "";
  }

  function handleRemove(index) {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
  }

  function handleResetTodos() {
    setTodos([]);
  }

  return (
    <div>
      <input type="text" ref={todoRef} />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleResetTodos}>Reset</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleRemove(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
