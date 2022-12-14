import React from "react";

import Task from "./Task";

const Tasks = ({ tasks, handleTaskClickCompleted }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task task={task} handleTaskClickCompleted={handleTaskClickCompleted} />
      ))}
    </>
  )
}

export default Tasks;