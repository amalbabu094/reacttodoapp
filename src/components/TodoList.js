import TodoItem from "./TodoItem";
import React from "react";
function TodoList({ tasks, deleteTask, editTask }) {

  return (

    <div>

      {tasks.map((task, index) => (

        <TodoItem
          key={index}
          task={task}
          index={index}
          deleteTask={deleteTask}
          editTask={editTask}
        />

      ))}

    </div>

  );

}

export default TodoList;