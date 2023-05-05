import React, { useState } from "react";
import TodoItem from "./todoItem";
import './todoList.css';


const App = () => {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState("");

  const handleAddTodo = () => {
    if (todoInput.trim()) {
      setTodos([...todos, todoInput]);
      setTodoInput("");
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleInputChange = (event) => {
    setTodoInput(event.target.value);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input value={todoInput} onChange={handleInputChange} />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            handleDelete={() => handleDeleteTodo(index)}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;

