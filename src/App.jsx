import React, { useState } from 'react';

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

  return (
    <>
      <div className='container'>
        <AddTask />
        <Tasks tasks={tasks} />
      </div>
    </>
  )
};

export default App;