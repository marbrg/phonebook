import React, { useState, useEffect } from 'react'
import taskService from "services/tasks"



const TasksContext = React.createContext(null)

const ProviderWrapper = (props) => {

    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask ] = useState('')
    const [taskPriority, setTaskPriority] = useState(1)
    const [task, setTask] = useState('')
    const [done, setDone] = useState(false)
    const [showCompletedTasks, setShowCompletedTasks] = useState(false)

    const sortedTasks = tasks.sort( (a,b) => b.taskPriority - a.taskPriority)



    const initialLoad = () => {
        taskService
          .getAll()
          .then(tasks => {
            setTasks(tasks)
          })
          .catch(error => {
            console.error('Unable to load data.', error)
          })
    }
    useEffect(initialLoad, [])
    
    const addTask = (task) => {
    taskService
        .create(task)
        .then(newTask => {
        setTasks(tasks.concat(newTask))
        })
        .catch(error => {
        console.error('Unable to insert data.', error)
        })
    }

    const changePriority = (id, newPriority) => {
        taskService
        .update(id, newPriority)
        .then(updatedPriority => {
            setTaskPriority(updatedPriority)
        })
        .catch(error => {
        console.error('Unable to update data.', error)
        })
    }

    const changeTask = (id, newTask) => {
        taskService
        .update(id, newTask)
        .then(updatedTask => {
            setTask(updatedTask)
            console.log(updatedTask)
            setTasks(sortedTasks)
        })
        .catch(error => {
        console.error('Unable to update data.', error)
        })
    }

    const deleteTask = (id) => {
        taskService
        .deleteTask(id)
        .then(response => {
            console.log(response)
            const updatedTasks = tasks.filter(item => item.id !== id)
            setTasks(updatedTasks)
        })
        .catch(error => {
        console.error('Unable to delete data.', error)
        })
    }
    

    const exposedValue = {
        tasks,
        newTask,
        setTasks,
        setNewTask,
        initialLoad,
        addTask,
        taskPriority,
        setTaskPriority,
        sortedTasks,
        task,
        setTask,
        changePriority,
        changeTask,
        deleteTask,
        done,
        setDone,
        showCompletedTasks,
        setShowCompletedTasks
    }


    
    return <TasksContext.Provider value={exposedValue}>
        { props.children }
    </TasksContext.Provider>

    
}

    
export {
    TasksContext,
    ProviderWrapper,
}


export default TasksContext;