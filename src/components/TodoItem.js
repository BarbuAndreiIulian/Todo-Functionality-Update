import React from "react";

function TodoItem(props) {
  let style = "notcompletedClass";
  if (props.completed) {
    style = "completedClass";
  }
  return (
    <div className={style}>
      <h1>{props.value}</h1>
      <button onClick={() => props.handleDelete(props.todo.id)}>Delete</button>

      <button onClick={() => props.handleComplete(props.todo.id)}>
        Complete
      </button>
    </div>
  );
}

export default TodoItem;
