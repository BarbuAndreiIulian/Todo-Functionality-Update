import React, { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(theText) {
    let id = 1;

    if (todos.length > 0) {
      id = todos[0].id + 1;
    }

    let newTodo = {
      text: theText,
      completed: false,
      id: id,
      key: id,
    };
    setTodos((prev) => [newTodo, ...todos]);
  }

  let elements = todos.map((prev) => (
    <TodoItem
      key={prev.key}
      value={prev.text}
      handleDelete={handleDelete}
      handleComplete={handleComplete}
      todo={prev}
      completed={prev.completed}
    />
  ));

  function handleDelete(idElement) {
    let newTodos = todos.filter((element) => element.id !== idElement);
    setTodos(newTodos);
  }

  function handleComplete(id) {
    let updatedTodos = todos.map((prev) => {
      if (prev.id == id) {
        prev.completed = !prev.completed;
      }
      return prev;
    });
    setTodos(updatedTodos);
  }

  console.log(todos);
  return (
    <div className="App">
      <h1>Todo</h1>
      <TodoForm handleSubmit={addTodo} />
      {elements}
    </div>
  );
}

export default App;
