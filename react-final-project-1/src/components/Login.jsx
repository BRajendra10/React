import React from 'react'

function Login() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <form action="" className="w-[28rem] flex flex-col p-5 rounded-lg shadow-2xl">
        <h2 className="self-center text-4xl font-semibold mb-5">Login</h2>

        <label htmlFor="email" className="text-lg my-3">Email</label>
        <input type="email" className="border-2 rounded p-2" />

        <label htmlFor="password" className="text-lg my-3">password</label>
        <input type="password" className="border-2 rounded p-2" />

        <button type="submit" className="border p-2 rounded-full text-lg font-semibold hover:bg-stone-950 hover:text-stone-50 duration-700 mt-15 mb-5">Login</button>
      </form>
    </div> 
  )
}

export default Login