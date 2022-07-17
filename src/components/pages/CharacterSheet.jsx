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

export default function CharacterSheet() {
  const [showCharacter, setShowCharacter] = useState(true)
  const [showSkills, setShowSkills] = useState(false)
  const [showCombat, setShowCombat] = useState(false)
  const [showInventory, setShowInventory] = useState(false)
  const [showNotes, setShowNotes] = useState(false)
  // const [character, setCharacter] = useState({
  // careers: [],
  // combatSkills: [],
  // generalSkills: [],
  // knowledgeSkills: [],
  // customSkills: [],
  // inventory: [],
  // weapons: [],
  // talents: [],
  // forcePowers: [],
  // criticalInjuries: [],
  // armors: [],
  // cybernetics: [],
  // tools: [],
  // })
  // const [updateCharacter, setUpdateCharacter] = useState(false)
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
    try {
      console.log('character updated')
      await axios.put(`${serverUrl}/characters/${id}`, characterForm)
      const foundChar = await axios.get(`${serverUrl}/characters/${id}`)
      setCharacterForm(foundChar.data)
    } catch (err) {
      console.warn(err)
    }
  }

  return (
    <div>
      <h2>Character Sheet</h2>
      <button onClick={saveCharacterSheet}>Save</button>

      <Characteristics
        setCharacterForm={setCharacterForm}
        characterForm={characterForm}
      />

      <Stats
        characterForm={characterForm}
        setCharacterForm={setCharacterForm}
      />

      <div>
        <button
          onClick={() => {
            setShowCharacter(true)
            setShowSkills(false)
            setShowCombat(false)
            setShowInventory(false)
            setShowNotes(false)
          }}
        >
          Character
        </button>
        <button
          onClick={() => {
            setShowCharacter(false)
            setShowSkills(true)
            setShowCombat(false)
            setShowInventory(false)
            setShowNotes(false)
          }}
        >
          Skills
        </button>
        <button
          onClick={() => {
            setShowCharacter(false)
            setShowSkills(false)
            setShowCombat(true)
            setShowInventory(false)
            setShowNotes(false)
          }}
        >
          Combat
        </button>
        <button
          onClick={() => {
            setShowCharacter(false)
            setShowSkills(false)
            setShowCombat(false)
            setShowInventory(true)
            setShowNotes(false)
          }}
        >
          Inventory
        </button>
        <button
          onClick={() => {
            setShowCharacter(false)
            setShowSkills(false)
            setShowCombat(false)
            setShowInventory(false)
            setShowNotes(true)
          }}
        >
          Notes
        </button>
      </div>

      {showCharacter ? (
        <CharacterInfo
          setCharacterForm={setCharacterForm}
          characterForm={characterForm}
        />
      ) : null}
      {showSkills ? (
        <SkillsInfo
          setCharacterForm={setCharacterForm}
          characterForm={characterForm}
        />
      ) : null}
      {showCombat ? (
        <CombatInfo
          setWeapon={setWeapon}
          weapon={weapon}
          setCharacterForm={setCharacterForm}
          characterForm={characterForm}
        />
      ) : null}
      {showInventory ? (
        <InventoryInfo
          setCharacterForm={setCharacterForm}
          characterForm={characterForm}
        />
      ) : null}
      {showNotes ? (
        <Notes
          characterForm={characterForm}
          setCharacterForm={setCharacterForm}
        />
      ) : null}

      <button onClick={saveCharacterSheet}>Save</button>
    </div>
  )
}
