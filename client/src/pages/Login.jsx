import React, { useState } from 'react'

const Login = ({ onLogin }) => {

  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ error, setError ] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch('http://localhost:8080/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password
        })
      })

      if (!response.ok) {
        const errorMessage = await response.json()
        throw new Error(errorMessage || 'Login Failed')
      }

      const { token } = await response.json()
      onLogin(token)
    } catch(error) {
      console.error('Login error:', error.message)
      setError(error.message)
    }
  }

  return (
    <div className='w-full h-screen bg-primary text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'> 
        <form onSubmit={ handleLogin } className='flex flex-col items-center justify-center w-full gap-2'>
          <label>Username</label>
          <input type="text" id='username' value={username} onChange={(e) => setUsername(e.target.value)} className='rounded-md border border-gray-300 p-2'/>

          <label>Password</label>
          <input type="password" id='password' value={password} onChange={(e) => setPassword(e.target.value)} className='rounded-md border border-gray-300 p-2'/>

          <button type='submit' className='rounded-md p-2 bg-pink-600 text-white cursor-pointer'>
            Login
          </button>

          { error && 
            (
              <p className='text-sm text-red-600'>
                { error }
              </p>
            )}
        </form>
      </div>
    </div>
  )
}

export default Login
