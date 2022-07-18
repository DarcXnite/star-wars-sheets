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
    <div>
      <Link to={`/characters/${_id}`}>
        <h4>{name}</h4>
      </Link>
      <button onClick={deleteCharacter}>Delete Character</button>
    </div>
  )
}
