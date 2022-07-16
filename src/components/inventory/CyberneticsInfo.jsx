import { useState } from 'react'

export default function CyberneticsInfo({
  setCharacterForm,
  characterForm: { cybernetics },
  characterForm,
}) {
  const [newCybernetic, setNewCybernetic] = useState({
    implantName: '',
    active: false,
    summary: '',
    rarity: 0,
  })
  const allCybernetics = cybernetics.map(eachCybernetic => {
    const { implantName, active, summary, rarity } = eachCybernetic
    return (
      <div>
        <label htmlFor='implantName'>Implant Name</label>
        <input
          id='implantName'
          type='text'
          name='implantName'
          value={implantName}
          onChange={e =>
            newCybernetic({ ...characterForm, implantName: e.target.value })
          }
        />
        <label htmlFor='active'>Active</label>
        <input
          id='active'
          type='boolean'
          name='active'
          value={active}
          onChange={e =>
            newCybernetic({ ...characterForm, active: e.target.value })
          }
        />
        <label htmlFor='summary'>Summary</label>
        <input
          id='summary'
          type='text'
          name='summary'
          value={summary}
          onChange={e =>
            newCybernetic({ ...characterForm, summary: e.target.value })
          }
        />
        <label htmlFor='rarity'>Implant Name</label>
        <input
          id='rarity'
          type='number'
          name='rarity'
          value={rarity}
          onChange={e =>
            newCybernetic({ ...characterForm, rarity: e.target.value })
          }
        />
      </div>
    )
  })
  return (
    <div>
      <h2>Cybernetics</h2>
      {allCybernetics}
    </div>
  )
}
