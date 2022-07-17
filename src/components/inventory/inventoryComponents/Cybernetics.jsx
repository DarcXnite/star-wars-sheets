import React from 'react'

export default function Cybernetics({
  cybernetics: { implantName, active, summary, rarity },
  setCharacterForm,
  characterForm,
  idx,
}) {
  const updateCybernetic = (e, idx) => {
    console.log('toggled')
    const updatedCybernetics = characterForm.cybernetics.map(
      (cybernetic, i) => {
        if (idx === i) {
          return { ...cybernetic, [e.target.name]: e.target.value }
        } else {
          return cybernetic
        }
      }
    )
    setCharacterForm({ ...characterForm, cybernetics: updatedCybernetics })
  }

  const activeCheck = (e, idx) => {
    const updatedCybernetics = characterForm.cybernetics.map(
      (cybernetic, i) => {
        if (idx === i) {
          return { ...cybernetic, [e.target.name]: !active }
        } else {
          return cybernetic
        }
      }
    )
    setCharacterForm({ ...characterForm, cybernetics: updatedCybernetics })
  }
  return (
    <React.Fragment>
      <label htmlFor='implantName'>Implant Name</label>
      <input
        id='implantName'
        type='text'
        name='implantName'
        value={implantName}
        onChange={e => updateCybernetic(e, idx)}
      />
      <label htmlFor='active'>Active</label>
      <input
        id='active'
        type='checkbox'
        name='active'
        value={active}
        onChange={e => activeCheck(e, idx)}
        checked={active}
      />
      <label htmlFor='summary'>Summary</label>
      <input
        id='summary'
        type='text'
        name='summary'
        value={summary}
        onChange={e => updateCybernetic(e, idx)}
      />
      <label htmlFor='rarity'>Rarity</label>
      <input
        id='rarity'
        type='number'
        name='rarity'
        value={rarity}
        onChange={e => updateCybernetic(e, idx)}
      />
    </React.Fragment>
  )
}
