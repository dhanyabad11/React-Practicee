import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTasks] = useState('');

  const addTask = () => {
    setTasks([...tasks, task]);
    setTasks('');
  };


  return (
    <div>
    <input
      type="text"
      value={task}
      onChange={(e) => setTask(e.target.value)}
      placeholder="New Task"
    />
    <button onClick={addTask}>Add Task</button>
    <ul>
      {tasks.map((t, index) => (
        <li key={index}>{t}</li>
      ))}
    </ul>
  </div>
      
  )
}

export default App
