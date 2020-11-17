import React, { useContext } from 'react'
import AddTask from "components/AddTask/AddTask";
import Task from "components/Task/Task";
import TaskContext from "contexts/TasksContext.jsx"
import CompletedTasks from "components/CompletedTasks/CompletedTasks"

const App = () => {
  const {sortedTasks} = useContext(TaskContext)
  const uncompletedTasks = sortedTasks.filter(task=>task.done===false)
 

  return (
    <div>
      <header>
        <h1>To do list</h1>
      </header>
      <AddTask/>
      {uncompletedTasks.length>0?  
        (
          <div id="todo-container"><ul className="todo-list">
          { uncompletedTasks.map(filteredTask => (
            <li className="todo-item">
              <Task key={filteredTask.id} task={filteredTask}/>
            </li>
          ))}
          </ul></div>
        ) :
        (<h4>Aucune tâche dans la liste, veuillez en ajouter une grâce au formulaire ci-dessus</h4>)
      }
      <br/>
      <CompletedTasks/>
    </div>
  );
};

export default App;
