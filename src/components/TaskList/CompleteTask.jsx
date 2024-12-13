import { data } from 'autoprefixer'
import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className='h-full flex-shrink-0 w-[300px] p-5 bg-blue-400 rounded-xl'>
        <div className='flex justify-between items-center'>
            <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>{data.category}</h3>
            <h4 className='text-sm'>{data.date}</h4>
        </div>    
        <h2 className='mt-5 text-xl font-semibold'>{data.title}</h2>
        <p className='text-sm mt-2'>{data.description}</p>
        <div className='mt-2'>
            <button className='w-full bg-green-500'>Complete</button>
        </div>
      </div>
  )
}

export default CompleteTask
