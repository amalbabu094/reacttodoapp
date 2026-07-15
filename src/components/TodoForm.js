import React from "react";
import { useState, useEffect } from "react";

function TodoForm({ addTask, editTask }) {

  const [task, setTask] = useState("");

  useEffect(() => {

    setTask(editTask);

  }, [editTask]);

  const handleSubmit = (e) => {

    e.preventDefault();

    if (task.trim() === "") return;

    addTask(task);

    setTask("");

  };

  return (

    <form onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Enter Task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <button>Add / Update</button>

    </form>

  );

}

export default TodoForm;