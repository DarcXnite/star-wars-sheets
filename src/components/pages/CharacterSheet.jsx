import { useState } from 'react'
import axios from 'axios'
import CharacterInfo from '../CharacterInfo'
import SkillsInfo from '../SkillsInfo'
import CombatInfo from '../CombatInfo'
import InventoryInfo from '../InventoryInfo'
import Notes from '../Notes'

export default function CharacterSheet() {
  const [showCharacter, setShowCharacter] = useState(true)
  const [showSkills, setShowSkills] = useState(false)
  const [showCombat, setShowCombat] = useState(false)
  const [showInventory, setShowInventory] = useState(false)
  const [showNotes, setShowNotes] = useState(false)

  const [characterForm, setCharacterForm] = useState({})

  return (
    <div>
      <h2>Character Sheet</h2>

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

      {showCharacter ? <CharacterInfo /> : null}
      {showSkills ? <SkillsInfo /> : null}
      {showCombat ? <CombatInfo /> : null}
      {showInventory ? <InventoryInfo /> : null}
      {showNotes ? <Notes /> : null}

      <button>Save</button>
    </div>
  )
}
