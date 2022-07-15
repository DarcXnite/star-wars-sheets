import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import CharacterInfo from '../CharacterInfo'
import SkillsInfo from '../SkillsInfo'
import CombatInfo from '../CombatInfo'
import InventoryInfo from '../InventoryInfo'
import Notes from '../Notes'
import Characteristics from '../Characteristics'
import Stats from '../Stats'

const serverUrl = process.env.REACT_APP_SERVER_URL

export default function CharacterSheet() {
  const [showCharacter, setShowCharacter] = useState(true)
  const [showSkills, setShowSkills] = useState(false)
  const [showCombat, setShowCombat] = useState(false)
  const [showInventory, setShowInventory] = useState(false)
  const [showNotes, setShowNotes] = useState(false)
  const [character, setCharacter] = useState({
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
  const [inventory, setInventory] = useState({
    itemName: '',
    cost: 0,
    encumbrance: 0,
    description: '',
  })

  // const [characterForm, setCharacterForm] = useState({
  //   name: '',
  //   species: '',
  //   gender: '',
  //   age: '',
  //   height: '',
  //   build: '',
  //   hair: '',
  //   careers: [],
  //   combatSkills: [],
  //   generalSkills: [],
  //   knowledgeSkills: [],
  //   customSkills: [],
  //   inventory: [],
  //   weapons: [],
  //   talents: [],
  //   forcePowers: [],
  //   criticalInjuries: [],
  //   armors: [],
  //   cybernetics: [],
  //   tools: [],
  // })

  const [characterForm, setCharacterForm] = useState(character)

  const { id } = useParams()
  console.log(characterForm)

  useEffect(() => {
    const getCharacter = async () => {
      try {
        const foundCharacter = await axios.get(`${serverUrl}/characters/${id}`)
        setCharacter(foundCharacter.data)
        setCharacterForm(foundCharacter.data)
      } catch (err) {
        console.warn(err)
      }
    }
    getCharacter()
  }, [id])

  const onSubmit = () => {
    console.log('data submitted')
  }

  return (
    <div>
      <h2>Character Sheet</h2>

      <Characteristics
        character={character}
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
          character={character}
          setCharacterForm={setCharacterForm}
          characterForm={characterForm}
        />
      ) : null}
      {showSkills ? <SkillsInfo /> : null}
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
          setInventory={setInventory}
          inventory={inventory}
          setCharacterForm={setCharacterForm}
          characterForm={characterForm}
        />
      ) : null}
      {showNotes ? <Notes /> : null}

      <button onClick={onSubmit}>Save</button>
    </div>
  )
}