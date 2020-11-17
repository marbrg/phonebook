import React, { useContext } from 'react'
import TaskContext from "contexts/TasksContext.jsx"
import CompletedTask from "components/Task/CompletedTask"

const CompletedTasks = () => {

  const {tasks, showCompletedTasks, setShowCompletedTasks} = useContext(TaskContext)


  const handleShowCompletedTasks = () => {
      setShowCompletedTasks(!showCompletedTasks)
      console.log(showCompletedTasks)
  };

  return (
    <div>
        <div className="completedTasks">
        {showCompletedTasks?
            (<button className="todo-button" type="submit" onClick={handleShowCompletedTasks}>Cacher les tâches finies</button>):
            (<button className="todo-button" type="submit" onClick={handleShowCompletedTasks}>Afficher les tâches finies</button>)
        }
        </div>
        {showCompletedTasks?
            (<ul className="todo-list">
            { tasks.filter(task=>task.done===true).map(filteredTask => (
                <li className="todo-item">
                <CompletedTask key={filteredTask.id} task={filteredTask}/>
                </li>
            ))}
            </ul>) : null
        }
    </div>
  );

};

export default CompletedTasks;
