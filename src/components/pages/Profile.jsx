import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const serverUrl = process.env.REACT_APP_SERVER_URL

export default function Profile({
  currentUser: { name, email, id },
  currentUser,
  handleLogout,
}) {
  // state for the secret message for user priv data
  const [msg, setMsg] = useState('')
  const [userData, setUserData] = useState({
    characters: [],
  })

  // useEffect for getting the user data and checking auth
  useEffect(() => {
    const fetchData = async () => {
      try {
        // get the token from local storage
        const token = localStorage.getItem('jwt')
        // make the auth headers
        const options = {
          headers: {
            Authorization: token,
          },
        }
        // hit the auth locked endpoint
        const res = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/users/auth-locked`,
          options
        )
        // set the secret user message in state
        setMsg(res.data.msg)
      } catch (err) {
        console.warn(err)
        // if the error is 401 -- that means the auth failed
        if (err.res) {
          if (err.res.status === 401) {
            handleLogout()
          }
        }
      }
    }
    fetchData()
  })

  // fetch user data
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`${serverUrl}/users/${id}`)
        setUserData(res.data)
      } catch (err) {
        console.warn(err)
      }
    }
    fetchUser()
    // eslint-disable-next-line
  }, [id])

  // console.log(currentUser)

  const allCharacters = userData.characters.map(char => {
    const { name, _id } = char
    return <Link to={`/characters/${_id}`}>{name}</Link>
  })

  const loggedIn = (
    <div>
      <h1>Hello, {name}</h1>
      <p>Your email is: {email}</p>
      {allCharacters}

      <h2>
        Here is the secret message that is only available to users of User App:{' '}
      </h2>
      <h3>{msg}</h3>
    </div>
  )

  return <div>{currentUser ? loggedIn : <div>Loading Profile</div>}</div>
}
