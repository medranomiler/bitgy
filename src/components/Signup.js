import React from 'react'
import { useState, useEffect } from 'react'

const Signup = () => {
  const [ user, setUser ] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await fetch('api/user', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user })
    })
    if(response.ok){
      alert("email submitted!")
    }
  }

  return (
    <div className='min-h-96 flex flex-col md:flex-row justify-center items-center px-8 py-8 md:px-0 md:py-8 bg-slate-50'>
        <div className="md:w-1/3 md:mx-8">
        <h2 className="font-bold text-3xl md:text-5xl text-black">Preorder your Bitgy Bank!</h2>
        <br/>
        <p className='font-bold text-xl text-gray-400'>Start saving in Bitcoin and take control of your financial future.</p>
        </div>
        <br/>
            <form className="md:w-1/3 md:mx-8 md:flex md:justify-center md:items-center" onSubmit={handleSubmit}>
              <input type="email" placeholder="email" className="p-2 sm:p-4 border border-2 sm:border-4 border-black rounded-l-full h-11 sm:h-16  focus:outline-none" value={user} onChange={(e) => setUser(e.target.value)}/>
              <button type="submit" className="relative -left-2 font-bold text-black p-2 sm:p-4 rounded-r-full border border-2 sm:border-t-4 sm:border-l-4 sm:border-b-4 sm:border-r-4 border-black bg-slate-50 hover:text-white hover:bg-black">Let's Go!</button>
            </form>
    </div>
  )
}

export default Signup