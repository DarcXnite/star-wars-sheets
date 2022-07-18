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

  const initialCharacterForm = {
    name: 'New Character',
    species: '',
    gender: '',
    age: 0,
    height: '',
    build: '',
    hair: '',
    eyes: '',
    brawn: 0,
    agility: 0,
    intellect: 0,
    cunning: 0,
    willpower: 0,
    presence: 0,
    woundsThreshold: 0,
    wounds: 0,
    strainThreshold: 0,
    strain: 0,
    soakValue: 0,
    rangedDef: 0,
    meleeDef: 0,
    encumThreshold: 0,
    encumCurrent: 0,
    forcePool: 0,
    morality: 0,
    conflict: 0,
    notes: '',
    credits: 0,
    careers: [],
    combatSkills: [],
    generalSkills: [],
    knowledgeSkills: [],
    customSkills: [],
    inventory: [],
    weapons: [],
    talents: [],
    forcePowers: [],
    criticalInjuries: [],
    armors: [],
    cybernetics: [],
    tools: [],
  }

  const allCharacters = userData.characters.map(char => {
    const { name, _id } = char
    return (
      <div key={_id}>
        <Link to={`/characters/${_id}`}>{name}</Link>
      </div>
    )
  })

  const createCharacter = async () => {
    console.log('character created')
    try {
      await axios.post(
        `${serverUrl}/characters/${userData._id}`,
        initialCharacterForm
      )

      const res = await axios.get(`${serverUrl}/users/${id}`)
      setUserData(res.data)
    } catch (err) {
      console.warn(err)
    }
  }

  const loggedIn = (
    <div>
      <h1>Hello, {name}</h1>
      <p>Your email is: {email}</p>
      {allCharacters}
      <button onClick={createCharacter}>Create Character</button>

      <h2>
        Here is the secret message that is only available to users of User App:{' '}
      </h2>
      <h3>{msg}</h3>
    </div>
  )

  return <div>{currentUser ? loggedIn : <div>Loading Profile...</div>}</div>
}
