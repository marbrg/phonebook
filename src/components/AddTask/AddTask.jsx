import React, { useState, useContext } from 'react'
import TaskContext from "contexts/TasksContext.jsx"

const AddTask = () => {

  const {done, taskPriority, addTask} = useContext(TaskContext)
  const [ taskName, setTaskName ] = useState('')

  const handleAddTask = (event) => {
    event.preventDefault()
    addTask({
      taskName,
      taskPriority,
      done
    });
    setTaskName('')

  };

  const handleTaskChange = (event) => {
    event.preventDefault()
    setTaskName(event.target.value)
  };


  return (
    <form onSubmit={handleAddTask}>
      <div>
        <input type="text" className="todo-input" onChange={handleTaskChange} value={taskName}/>
        <button type="submit">+</button>
      </div>
    </form>
  );

};

export default AddTask;
