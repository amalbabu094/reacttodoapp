import React from "react";
function TodoItem({ task, index, deleteTask, editTask }) {

  return (

    <div className="todo">

      <h3>{task}</h3>

      <button onClick={() => editTask(index)}>
        Edit
      </button>

      <button onClick={() => deleteTask(index)}>
        Delete
      </button>

    </div>

  );

}

export default TodoItem;