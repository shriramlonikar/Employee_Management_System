import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

  const [userData, setUserData] = useContext(AuthContext)

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')

  const [newTask, setNewTask] = useState([])

  const submitHandler = (e) => {

    e.preventDefault()

    setNewTask({taskTitle, taskDescription, taskDate, category, active:false, newTask:true, faield:false, completed:false})

    const data = userData
    
    

    data.forEach(function(elem){
      if(assignTo == elem.firstname){
        elem.tasks.push(newTask)
        console.log(elem)
        elem.taskNumbers.newTask = elem.taskNumbers.newTask+1
      }
    });
    setUserData(data)
    console.log(data);

    setTaskTitle('')
    setCategory('')
    setAssignTo('')
    setTaskDate('')
    setTaskDescription('')
    
  }

  return (
    <div className='flex'>
      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='flex flex-wrap w-full bg-[#1C1C1C] items-start justify-between'>
        <div className='w-1/2'>
          <div className='py-2 px-2'>
            <h3>Task Title</h3>
            <input
             value={taskTitle} 
             onChange={(e)=>{
              setTaskTitle(e.target.value)
            }} 
            className=' border py-1 px-2 text-sm w-4/5 bg-transparent border-white rounded-md' type="text" placeholder='Make a UI design' />
          </div>
          <div className='py-4 px-2'> <h3>Date</h3>
            <input
            value={taskDate} 
            onChange={(e)=>{
             setTaskDate(e.target.value)
           }} 
            className=' border py-1 px-2 text-sm w-4/5 bg-transparent border-white rounded-md' type="date" />
          </div>
          <div className='py-4 px-2'><h3>Assign to</h3>
            <input
            value={assignTo} 
            onChange={(e)=>{
             setAssignTo(e.target.value)
           }} 
            className=' border py-1 px-2 text-sm w-4/5 bg-transparent border-white rounded-md' type="text" placeholder='Employee Name' />
          </div>
          <div className='py-4 px-2'><h3>Catagory</h3>
            <input
             value={category} 
             onChange={(e)=>{
              setCategory(e.target.value)
            }}
            className=' border py-1 px-2 text-sm w-4/5 bg-transparent border-white rounded-md' type="text" placeholder='design, dev, etc' />
          </div>
        </div>

        <div className='w-1/2 flex flex-col'><h3>Description</h3>
          <textarea value={taskDescription} 
             onChange={(e)=>{
              setTaskDescription(e.target.value)
            }} className='bg-transparent border border-white rounded-md+' name="" id="" cols={30} rows={10}></textarea>
          <div className='bg-green-400 flex font-semibold items-center mt-2 p-2 justify-center'>
            <button className='bg-green-400'>Create Task</button>
          </div>

        </div>


      </form>
    </div>
  )
}

export default CreateTask
