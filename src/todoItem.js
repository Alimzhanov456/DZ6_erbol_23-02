import React from "react";

const TodoItem = ({ todo, handleDelete }) => {
  return (
    <li>
      {todo}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default TodoItem;
