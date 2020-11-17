import React, { useContext } from 'react'
import {BsTrash } from "react-icons/bs"
import {MdCheckBox} from "react-icons/md"
import TaskContext from "contexts/TasksContext.jsx"

const CompletedTask = ({ task }) => {

  const {changeTask, deleteTask} = useContext(TaskContext)

  const handlePriorityChange = (event) => {
    task.taskPriority = event.target.value
    changeTask(task.id, task)
  };



  const handleDeleteTask = () =>{
    deleteTask(task.id)
  }

  const handleCheckboxChange = (event) => {
    task.done = !task.done
    changeTask(task.id, task)
  }

  return(
    <div className="todo-completed" key={task.id}>
      <input readOnly className="todo-item-completed" defaultValue={task.taskName} />
      <select className="select-priority" defaultValue={task.taskPriority} onChange={handlePriorityChange}>
        <option value="3">Haute</option>
        <option value="2">Moyenne</option>
        <option value="1">Basse</option>
      </select>
      <button className="complete-btn" type="submit" onClick={handleCheckboxChange}>
        <MdCheckBox className="fas fa-check"/>
      </button>
      <button className="trash-btn" type="submit" onClick={handleDeleteTask}>
        <BsTrash className="fas fa-trash"/>
      </button>
    </div>
  )
};

export default CompletedTask