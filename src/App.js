import React, {useState, useEffect} from 'react'

import "./App.css"
import TaskForm from './components/TaskForm'
import TaskColumn from './components/TaskColumn'
import TodoIcon from "./assets/check_mark.png"
import doingIcon from "./assets/in_progress.png" 
import doneIcon from "./assets/done.png"

const oldTasks = localStorage.getItem("tasks")
console.log(oldTasks);

const App = () => {
  const [tasks, setTasks] = useState(JSON.parse(oldTasks) || []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks]) 

  const handleDelete = (taskIndex) => {
    const newTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  }
  return (
    <div className='app'>
     <TaskForm setTasks={setTasks}/>
      <main className='app_main'>
         <TaskColumn title="to do" icon={TodoIcon} tasks={tasks} 
         status="todo"  handleDelete={handleDelete}/>
          <TaskColumn title="in-progress" icon={doingIcon} tasks={tasks} 
         status="in-progress" handleDelete={handleDelete}/>
           <TaskColumn title="Done" icon={doneIcon} tasks={tasks} 
         status="done" handleDelete={handleDelete}/>
  
      </main>
    </div>
  )
}

export default App
