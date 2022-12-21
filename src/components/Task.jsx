import React from "react";
import { CgClose, CgInfo } from "react-icons/cg";

import "./Task.css"

const Task = ({ task, handleTaskClickCompleted, handleTaskRemove }) => {
  return (
    <div
      className="task-container"
      style={task.completed ? { borderLeft: "6px solid chartreuse" } : {}}
    >
      <div className="task-title"
        onClick={() => handleTaskClickCompleted(task.id)}
      >
        {task.title}
      </div>

      <div className="butons-container">
        <button className="remove-task-button" onClick={() => handleTaskRemove(task.id)}>
          <CgClose />
        </button>
        <button className="see-task-details-button"
        >
          <CgInfo />
        </button>
      </div>
    </div>
  )
}

export default Task;