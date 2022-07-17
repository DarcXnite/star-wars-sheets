import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Cybernetics from './inventoryComponents/Cybernetics'

export default function CyberneticsInfo({
  setCharacterForm,
  characterForm: { cybernetics },
  characterForm,
}) {
  const allCybernetics = cybernetics.map((cybernetic, idx) => {
    const { _id } = cybernetic
    return (
      <details>
        <summary>Cybernetics</summary>
        <Cybernetics
          key={_id}
          cybernetics={cybernetics}
          setCharacterForm={setCharacterForm}
          characterForm={characterForm}
          idx={idx}
        />
      </details>
    )
  })

  const initialCyberneticsForm = {
    implantName: '',
    active: false,
    summary: '',
    rarity: 0,
  }

  const addCybernetic = () => {
    cybernetics.push(initialCyberneticsForm)
    setCharacterForm({ ...characterForm, cybernetics })
  }

  return (
    <div>
      <h2>Cybernetics</h2>
      {allCybernetics}
      <button onClick={addCybernetic}>Add a Cybernetic</button>
    </div>
  )
}
