import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import CharacterInfo from '../CharacterInfo'
import SkillsInfo from '../SkillsInfo'
import CombatInfo from '../CombatInfo'
import InventoryInfo from '../InventoryInfo'
import Notes from '../Notes'
import Characteristics from '../Characteristics'
import Stats from '../Stats'
import { knowledgeSkills, generalSkills, combatSkills } from '../defaults'

const serverUrl = process.env.REACT_APP_SERVER_URL

// guide to the RPG https://sw-eote-srd.vercel.app/

export default function CharacterSheet() {
  const [showCharacter, setShowCharacter] = useState(true)
  const [showSkills, setShowSkills] = useState(false)
  const [showCombat, setShowCombat] = useState(false)
  const [showInventory, setShowInventory] = useState(false)
  const [showNotes, setShowNotes] = useState(false)
  const [updateCharacter, setUpdateCharacter] = useState(false)
  const [weapon, setWeapon] = useState({
    weaponName: '',
    usesSkill: '',
    damage: 0,
    range: '',
    encumbrance: 0,
    hardPoints: 0,
    critRating: 0,
    condition: '',
    restricted: false,
    qualities: '',
    modifiers: '',
    rarity: 0,
    attachments: [],
  })

  const [characterForm, setCharacterForm] = useState({
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
  })

  const { id } = useParams()
  const navigate = useNavigate()

  // gets character as soon as the url changes
  useEffect(() => {
    const getCharacter = async () => {
      try {
        const foundCharacter = await axios.get(`${serverUrl}/characters/${id}`)
        // setCharacter(foundCharacter.data)
        setCharacterForm(foundCharacter.data)
      } catch (err) {
        console.warn(err)
      }
    }
    getCharacter()
  }, [id])

  // useEffect(() => {
  //   setUpdateCharacter(true)
  //   if (updateCharacter) {
  //     console.log('data sent to server')
  //     const updateCheck = async () => {
  //       const foundChar = await axios.get(`${serverUrl}/characters/${id}`)
  //       setCharacterForm(foundChar.data)
  //       setUpdateCharacter(false)
  //     }
  //     saveCharacterSheet()
  //     updateCheck()
  //   }
  // }, [characterForm])

  // sets defaults for all of default skills
  if (characterForm) {
    if (characterForm.generalSkills.length === 0) {
      characterForm.generalSkills = generalSkills
    }
    if (characterForm.combatSkills.length === 0) {
      characterForm.combatSkills = combatSkills
    }
    if (characterForm.knowledgeSkills.length === 0) {
      characterForm.knowledgeSkills = knowledgeSkills
    }
  }

  // update character
  // if (updateCharacter) {
  //   saveCharacterSheet()
  // }

  const saveCharacterSheet = async () => {
    setUpdateCharacter(true)
    try {
      console.log('character updated')
      await axios.put(`${serverUrl}/characters/${id}`, characterForm)
      const foundChar = await axios.get(`${serverUrl}/characters/${id}`)
      setCharacterForm(foundChar.data)
    } catch (err) {
      console.warn(err)
    }
    setTimeout(() => {
      setUpdateCharacter(false)
    }, 2000)
  }

  const deleteCharacter = async () => {
    console.log('character deleted')
    try {
      await axios.delete(`${serverUrl}/characters/${id}`)
      navigate('/profile')
    } catch (err) {
      console.warn(err)
    }
  }

  const tabs = (
    <ul className='flex flex-wrap justify-evenly text-sm font-medium text-center text-gray-500 dark:border-gray-700 dark:text-gray-400 mt-4'>
      <li className='mx-2'>
        <button
          onClick={() => {
            setShowCharacter(true)
            setShowSkills(false)
            setShowCombat(false)
            setShowInventory(false)
            setShowNotes(false)
          }}
          aria-current='page'
          className={`inline-block p-4 rounded-t-lg dark:bg-gray-100 dark:text-blue-500 ${
            showCharacter
              ? 'text-white bg-gray-400 hover:bg-gray-100 dark:bg-slate-500 dark:text-white'
              : 'hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300'
          }`}
        >
          Character
        </button>
      </li>
      <li className='mx-2'>
        <button
          onClick={() => {
            setShowCharacter(false)
            setShowSkills(true)
            setShowCombat(false)
            setShowInventory(false)
            setShowNotes(false)
          }}
          className={`inline-block py-4 px-6 rounded-t-lg dark:bg-gray-100 dark:text-blue-500 ${
            showSkills
              ? 'text-white bg-gray-300 hover:bg-gray-100 dark:bg-slate-500 dark:text-white'
              : 'hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300'
          }`}
        >
          Skills
        </button>
      </li>
      <li className='mx-2'>
        <button
          onClick={() => {
            setShowCharacter(false)
            setShowSkills(false)
            setShowCombat(true)
            setShowInventory(false)
            setShowNotes(false)
          }}
          className={`inline-block p-4 rounded-t-lg dark:bg-gray-100 dark:text-blue-500 ${
            showCombat
              ? 'text-white bg-gray-300 hover:bg-gray-100 dark:bg-slate-500 dark:text-white'
              : 'hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300'
          }`}
        >
          Combat
        </button>
      </li>
      <li className='mx-2'>
        <button
          onClick={() => {
            setShowCharacter(false)
            setShowSkills(false)
            setShowCombat(false)
            setShowInventory(true)
            setShowNotes(false)
          }}
          className={`inline-block p-4 rounded-t-lg dark:bg-gray-100 dark:text-blue-500 ${
            showInventory
              ? 'text-white bg-gray-300 hover:bg-gray-100 dark:bg-slate-500 dark:text-white'
              : 'hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300'
          }`}
        >
          Inventory
        </button>
      </li>
      <li className='mx-2'>
        <button
          onClick={() => {
            setShowCharacter(false)
            setShowSkills(false)
            setShowCombat(false)
            setShowInventory(false)
            setShowNotes(true)
          }}
          className={`inline-block p-4 rounded-t-lg dark:bg-gray-100 dark:text-blue-500 ${
            showNotes
              ? 'text-white bg-gray-300 hover:bg-gray-100 dark:bg-slate-500 dark:text-white'
              : 'hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300'
          }`}
        >
          Notes
        </button>
      </li>
    </ul>
  )

  return (
    <div className='mt-16'>
      {updateCharacter ? (
        <div className='text-center bg-green-500 py-3 sticky top-16'>
          Character Sheet Saved!
        </div>
      ) : null}

      <div className='flex items-center justify-between text-2xl text-gray-800 font-extrabold'>
        <button
          className='ml-3 hover:text-red-700'
          onClick={saveCharacterSheet}
        >
          Save
        </button>
        <h2 className='flex flex-col justify-center item-center text-center pt-4'>
          <span className='starjedi'>Character Sheet</span>
          <span className='text-xs'>(Be sure to save your changes!)</span>
        </h2>
        <button className='mr-3 hover:text-red-700' onClick={deleteCharacter}>
          Delete
        </button>
      </div>

      <Characteristics
        setCharacterForm={setCharacterForm}
        characterForm={characterForm}
      />

      <Stats
        characterForm={characterForm}
        setCharacterForm={setCharacterForm}
        saveCharacterSheet={saveCharacterSheet}
      />

      {tabs}

      {showCharacter ? (
        <CharacterInfo
          setCharacterForm={setCharacterForm}
          characterForm={characterForm}
          saveCharacterSheet={saveCharacterSheet}
        />
      ) : null}
      {showSkills ? (
        <SkillsInfo
          setCharacterForm={setCharacterForm}
          characterForm={characterForm}
          saveCharacterSheet={saveCharacterSheet}
        />
      ) : null}
      {showCombat ? (
        <CombatInfo
          setWeapon={setWeapon}
          weapon={weapon}
          setCharacterForm={setCharacterForm}
          characterForm={characterForm}
          saveCharacterSheet={saveCharacterSheet}
        />
      ) : null}
      {showInventory ? (
        <InventoryInfo
          setCharacterForm={setCharacterForm}
          characterForm={characterForm}
          saveCharacterSheet={saveCharacterSheet}
        />
      ) : null}
      {showNotes ? (
        <Notes
          characterForm={characterForm}
          setCharacterForm={setCharacterForm}
          saveCharacterSheet={saveCharacterSheet}
        />
      ) : null}
    </div>
  )
}
