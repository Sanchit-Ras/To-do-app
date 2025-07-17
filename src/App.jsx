import { useEffect, useState } from 'react'
import Header from './Header.jsx';
import Refresh from './Refresh.jsx';
import TodoList from './TodoList.jsx';
function App() {
const savedTasks = JSON.parse(
  localStorage.getItem("To-do") ||
  '[{"id":1,"title":"Clean my computer"},{"id":2,"title":"Buy a keyboard"}]'
);

const completedTasks = JSON.parse(
  localStorage.getItem("completed") ||
  '[{"id":3,"title":"Write an article about @xstate/test"},{"id":4,"title":"Write an article about @xstate"}]'
);




  const [tasks,updateTasks]=useState(savedTasks);
  const [completed,updateCompleted]=useState(completedTasks);
  useEffect(()=>{
    localStorage.setItem("To-do",JSON.stringify(tasks));
  }
  ,[tasks]);
  useEffect(()=>{
    localStorage.setItem("completed",JSON.stringify(completed));
  }
  ,[completed]);




  return (
    <div className='min-h-screen w-full flex flex-col items-center'>
      <Header/>
      <Refresh updateCompleted={updateCompleted} updateTasks={updateTasks}/>
      <TodoList tasks={tasks} completed={completed} updateTasks={updateTasks} updateCompleted={updateCompleted}/>
    </div>
  )
}

export default App
