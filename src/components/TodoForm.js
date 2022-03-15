import React, { useState } from "react";

function TodoForm(props) {
  const [value, setValue] = useState();

  function onSubmit(element) {
    element.preventDefault();
    props.handleSubmit(value);
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={(e) => {
            setValue(e.target.value);
          }}
          placeholder="Add Todo"
        ></input>
        <button>Add Todo</button>
      </form>
    </div>
  );
}

export default TodoForm;
