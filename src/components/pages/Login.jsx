import { useState } from 'react'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { Navigate, Link } from 'react-router-dom'

const serverUrl = process.env.REACT_APP_SERVER_URL

export default function Login({ currentUser, setCurrentUser }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    console.log('log the user in')
    try {
      const reqBody = {
        email,
        password,
      }

      const res = await axios.post(`${serverUrl}/users/login`, reqBody)

      // save the token in localstorage
      const { token } = res.data
      localStorage.setItem('jwt', token)
      // decode the token
      const decoded = jwt_decode(token)

      // set the user in App's state to be the decoded token
      setCurrentUser(decoded)
    } catch (err) {
      console.warn(err)
      if (err.res) {
        if (err.res.status === 400) {
          setMsg(err.res.data.msg)
        }
      }
    }
  }

  if (currentUser) {
    return <Navigate to='/profile' />
  }

  return (
    <div className='bg-gray-700 flex justify-between items-center px-12 py-12 h-screen'>
      <div className='bg-gray-800 shrink border-8 border-double border-red-800 mx-auto px-14 py-6 rounded-3xl shadow-md pt-12 max-w-lg sm:w-[500px] w-[280px]'>
        <h1 className='text-3xl starjedi text-center font-bold mb-5 text-white'>
          Login
        </h1>

        <p>{msg}</p>

        <form onSubmit={handleSubmit}>
          <div className='flex flex-col mb-3'>
            <label className='text-white font-semibold text-xl' htmlFor='email'>
              Email:{' '}
            </label>
            <input
              className='max--md bg-red-300 text-gray-800 rounded-sm shadow-inner hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset focus:ring-gray-800 px-4 py-2 placeholder:text-gray-800'
              type='email'
              id='email'
              placeholder='Your email...'
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className='flex flex-col mb-3'>
            <label
              className='text-white font-semibold text-xl'
              htmlFor='password'
            >
              Password:{' '}
            </label>
            <input
              className='max--md bg-red-300 text-gray-800 rounded-sm shadow-inner hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset focus:ring-gray-800 px-4 py-2 placeholder:text-gray-800'
              type='password'
              id='password'
              placeholder='Your Password...'
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <button
            className='flex justify-center items-center text-white bg-gray-700 rounded px-4 py-2 mt-3 w-full starjedi hover:bg-gray-600 hover:text-red-700'
            type='submit'
          >
            <span className='material-symbols-outlined mr-2'>login</span>
            <span>Login</span>
          </button>
        </form>
        <div className='text-center mt-3'>
          <span className='text-white'>
            Don't have an account? Sign up{' '}
            <Link to='/register'>
              <span className='text-sky-600 hover:text-red-700'>HERE!</span>
            </Link>
          </span>
        </div>
      </div>
    </div>
  )
}
