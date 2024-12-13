import React, { useState } from 'react'


const login = ({handleLogin}) => {

  console.log(handleLogin)
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email, password)
        setEmail("")
        setPassword("")
    }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 rounded-xl border-emerald-600 p-20'>

            <form onSubmit={(e) =>{
                submitHandler(e)
            }} className='flex flex-col items-center justify-center'>
                <input value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }} required className='outline-none bg-transparent border-2 border-emerald-600 py-3 text-xl px-5 rounded-full placeholder:text-gray-400' type="email" placeholder='Enter Your Email' />
                <input value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }} 
                required 
                className='outline-none bg-transparent border-2 border-emerald-600 py-3 text-xl px-5 rounded-full mt-3 placeholder:text-gray-400' type="password" placeholder='Enter Password' />
                <button className='text-white outline-none border-none border-2 bg-emerald-600 py-3 text-xl px-5 rounded-full mt-3 placeholder:text-white'>Log in</button>
            </form>
      </div>
    </div>
  )
}

export default login
