import React from "react";

function TodoItem(props) {
  return (
    <div className="todo-container">
      <h1>{props.value}</h1>
      <button onClick={() => props.handleDelete(props.todo.id)}>Delete</button>
      <button>Complete</button>
    </div>
  );
}

export default TodoItem;
