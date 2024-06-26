import { useState } from "react"


export const Task = ()=>{
  const [newTask, setNewTask] = useState("")
  const [tasks, setTask] = useState([])



  function handleTaskChange(event){
    setNewTask(event.target.value)

  }

  function addTask(){
    setTask(t =>[...t, newTask])
    setNewTask("")
  }

  function removeTask(index){
    const updatedTask = tasks.filter((_, i)=>i !== index)
    setTask(updatedTask)
  }
 


     return(
      <div className="task-container flex  justify-center mt-[30%] md:mt-[20vh]">
          <div className="task-body bg-pastelBlue p-10 rounded-xl">
            <h1 className="font-extrabold border-b-2 border-b-slateGray mb-6">Task Application</h1>



               <div className="task flex flex-col items-center">
                  <input type="text" placeholder="Add a new task" onChange={handleTaskChange} value={newTask} className="w-full pl-3 mb-4"/>
                 
                 <ol>
                    {tasks.map((task, index)=>
                      <li key={index} >
                      <span className="tasks-span">{task} <button onClick={()=>removeTask(index)} className="trash-btn border-2 px-3 rounded-xl border-slateGray text-softWhite">⤫</button> </span>
                      </li>
                    )}
                 </ol>

                 

                  <button onClick={()=>addTask()}  className="add-task mt-5 border-2 px-3 rounded-md border-slateGray text-softWhite">Add task</button>
               </div>
          </div>
      </div>
     )
}

export default Task