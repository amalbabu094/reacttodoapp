import React from "react";
import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import UserList from "./components/UserList";

function App() {

  const [tasks, setTasks] = useState([]);

  const [editIndex, setEditIndex] = useState(null);

  const addTask = (task) => {

    if (editIndex !== null) {

      const updated = [...tasks];
      updated[editIndex] = task;

      setTasks(updated);
      setEditIndex(null);

    } else {

      setTasks([...tasks, task]);

    }

  };

  const deleteTask = (index) => {

    const updated = tasks.filter((task, i) => i !== index);
    setTasks(updated);

  };

  const editTask = (index) => {

    setEditIndex(index);

  };

  return (
    <div>

      <Header />

      <TodoForm
        addTask={addTask}
        editTask={editIndex !== null ? tasks[editIndex] : ""}
      />

      <TodoList
        tasks={tasks}
        deleteTask={deleteTask}
        editTask={editTask}
      />

      <UserList />

      <Footer />

    </div>
  );
}

export default App;