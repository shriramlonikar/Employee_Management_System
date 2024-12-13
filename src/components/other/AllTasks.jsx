import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTasks = () => {

    const [userData, setUserData] = useContext(AuthContext)

    
    return (
    <div className='bg-[#1C1C1C] p-5 mt-5 rounded h-60 '>
        <div className=' bg-gray-600 mb-2 py-2 px-4 flex justify-between rounded bg-transparent'>
            <h2 className='text-lg font-medium w-1/5 '>Employee Name</h2>
            <h3 className='text-lg font-medium w-1/5 '>New Task</h3>
            <h5 className='text-lg font-medium w-1/5 '>Active Task</h5>
            <h5 className='text-lg font-medium w-1/5 '>Completed</h5>
            <h5 className='text-lg font-medium w-1/5 '>Faield</h5>
            </div>
        <div className='h-[80%] overflow-auto'>
        {userData.map(function(elem, idx){
            return <div key={idx} className='border-2 border-gray-400 mb-2 py-2 px-4 flex justify-between rounded bg-transparent'>
            <h2 className='text-lg font-medium w-1/5 '>{elem.firstname}</h2>
            <h3 className='text-lg font-medium w-1/5 text-blue-400 '>{elem.taskNumbers.newTask}</h3>
            <h5 className='text-lg font-medium w-1/5 text-yellow-400'>{elem.taskNumbers.active}</h5>
            <h5 className='text-lg font-medium w-1/5 text-green-600 '>{elem.taskNumbers.completed}</h5>
            <h5 className='text-lg font-medium w-1/5 text-red-400 '>{elem.taskNumbers.failed}</h5>
        </div>
        })}
        </div>
        
        
      
    </div>
  )
}

export default AllTasks
