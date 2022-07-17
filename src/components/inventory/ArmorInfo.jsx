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
      <details>
        <summary>Armor</summary>
        <Armor
          key={_id}
          armor={armor}
          setCharacterForm={setCharacterForm}
          characterForm={characterForm}
          armorIndex={idx}
        />
      </details>
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
      <h2>Armor</h2>
      {allArmor}
      <button onClick={addArmor}>Add Armor</button>
    </div>
  )
}
