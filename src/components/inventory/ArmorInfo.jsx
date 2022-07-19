import { useState } from 'react'
import Armor from './inventoryComponents/Armor'
import { v4 as uuidv4 } from 'uuid'

export default function ArmorInfo({
  setCharacterForm,
  characterForm: { armors },
  characterForm,
}) {
  const allArmor = armors.map((armor, idx) => {
    const { _id } = armor
    return (
      <Armor
        key={_id}
        armor={armor}
        setCharacterForm={setCharacterForm}
        characterForm={characterForm}
        armorIndex={idx}
      />
    )
  })

  const initialArmorForm = {
    name: '',
    condition: '',
    value: 0,
    qualities: '',
    features: '',
    rarity: 0,
    attachments: [],
  }

  const addArmor = () => {
    armors.push(initialArmorForm)
    setCharacterForm({ ...characterForm, armors })
  }

  return (
    <div>
      <div className='text-center text-white text-xl font-extrabold grid grid-cols-7 bg-gray-800 rounded-md'>
        <span>Name</span>
        <span>Condition</span>
        <span>Value</span>
        <span>Qualities</span>
        <span>Features</span>
        <span>Rarity</span>
      </div>
      {allArmor}
      <button onClick={addArmor}>
        <span className='material-symbols-outlined'>add</span>
      </button>
    </div>
  )
}
