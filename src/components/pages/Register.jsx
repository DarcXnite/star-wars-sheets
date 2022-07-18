import { useState } from 'react'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { Navigate, Link } from 'react-router-dom'

const serverUrl = process.env.REACT_APP_SERVER_URL

export default function Register({ currentUser, setCurrentUser }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [msg, setMsg] = useState('')

  const handleSubmit = async e => {
    e.preventDefault()
    console.log('log the user in')
    try {
      const reqBody = {
        name,
        email,
        password,
      }

      const res = await axios.post(`${serverUrl}/users/register`, reqBody)

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
    <div className='bg-red-700 flex justify-between items-center px-12 py-12 h-full'>
      <div className='bg-gray-800 mx-auto px-14 py-6 rounded-3xl shadow-md pt-12 max-w-lg w-[500px]'>
        <h1 className='text-3xl text-center font-bold mb-5 text-white'>
          Register for an Account:
        </h1>

        <p>{msg}</p>

        <form onSubmit={handleSubmit}>
          <div className='flex flex-col mb-3'>
            <label className='text-white font-semibold text-xl' htmlFor='name'>
              Name:{' '}
            </label>
            <input
              className='max--md bg-red-300 text-gray-800 rounded-sm shadow-inner hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset focus:ring-gray-800 px-4 py-2 placeholder:text-gray-800'
              type='text'
              id='name'
              placeholder='Your name...'
              onChange={e => setName(e.target.value)}
            />
          </div>
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
          <button type='submit'>Register</button>
        </form>
      </div>
      <Link to='/login'>
        <span>Already have an account? Sign in here!</span>
      </Link>
    </div>
  )
}
