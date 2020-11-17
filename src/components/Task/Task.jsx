import React, { useContext } from 'react'
import { BsTrash } from "react-icons/bs"
import {MdCheckBoxOutlineBlank} from "react-icons/md"
import TaskContext from "contexts/TasksContext.jsx"

const Task = ({ task }) => {

  const {changeTask, deleteTask} = useContext(TaskContext)

  const handlePriorityChange = (event) => {
    task.taskPriority = event.target.value
    changeTask(task.id, task)
  };

  const handleTaskChange = (event) => {
    const newName = event.target.value
    task.taskName = newName
    changeTask(task.id, task)

  };

  const handleDeleteTask = () =>{
    deleteTask(task.id)
  }

  const handleCheckboxChange = () => {
    task.done = !task.done
    changeTask(task.id, task)
  }

  return(
    <div className="todo" key={task.id}>
      <input className="todo-item" type="text" defaultValue={task.taskName} onChange={handleTaskChange} />
      <select title="Priorité" className="select-priority" defaultValue={task.taskPriority} onChange={handlePriorityChange}>
        <option value="3">Haute</option>
        <option value="2">Moyenne</option>
        <option value="1">Basse</option>
      </select>
      <button className="complete-btn" type="submit" onClick={handleCheckboxChange}>
        <MdCheckBoxOutlineBlank className="fas fa-check"/>
      </button>
      <button className="trash-btn" type="submit" onClick={handleDeleteTask}>
        <BsTrash className="fas fa-trash"/>
      </button>
    </div>
  )
};

export default Task