import React, { useState } from 'react';
import { v4 as uuidv4 } from "uuid";

import Tasks from './components/Tasks.jsx';
import AddTask from './components/AddTask.jsx';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: '1',
      title: 'Study programming',
      completed: false,
    },
    {
      id: '2',
      title: 'Read books',
      completed: true,
    },
  ]);

  const handleTaskClickCompleted = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed };

      return task;
    });

    setTasks(newTasks);
  }

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks, {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ];

    setTasks(newTasks);
  };

  return (
    <>
      <div className='container'>
        <AddTask handleTaskAddition={handleTaskAddition} />
        <Tasks tasks={tasks} handleTaskClickCompleted={handleTaskClickCompleted} />
      </div>
    </>
  )
};

export default App;