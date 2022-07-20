import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
const serverUrl = process.env.REACT_APP_SERVER_URL

export default function Character({
  char: { name, _id },
  userData,
  setUserData,
}) {
  const deleteCharacter = async () => {
    try {
      await axios.delete(`${serverUrl}/characters/${_id}`)
      const foundUser = await axios.get(`${serverUrl}/users/${userData._id}`)
      setUserData(foundUser.data)
    } catch (err) {
      console.warn(err)
    }
  }

  return (
    <div className='w-40 mt-7'>
      <Link to={`/characters/${_id}`}>
        <div className='hover:text-red-700 flex flex-wrap flex-col'>
          <span className='material-symbols-outlined text-8xl'>
            account_circle
          </span>
          <span>{name}</span>
        </div>
      </Link>
      <button
        className='hover:text-red-700 hover:bg-gray-800 rounded'
        onClick={deleteCharacter}
      >
        <div className='flex items-center justify-center'>
          <span className='material-symbols-outlined'>delete</span>
        </div>
      </button>
    </div>
  )
}
