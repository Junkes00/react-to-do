import React from "react";

import "./Task.css"

const Task = ({ task, handleTaskClickCompleted }) => {
  return (
    <div
      className="task-container"
      style={task.completed ? { borderLeft: "6px solid chartreuse" } : {}}
    >
      <div className="task-title" onClick={() => handleTaskClickCompleted(task.id)}>
        {task.title}
      </div>
    </div>
  )
}

export default Task;