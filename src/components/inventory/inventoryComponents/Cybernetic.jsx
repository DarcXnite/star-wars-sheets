import React from 'react'
import Login from '../../pages/Login'

export default function Cybernetics({
  cybernetic: { implantName, active, summary, rarity },
  cybernetics,
  setCharacterForm,
  characterForm,
  cyberneticIdx,
}) {
  const updateCybernetic = (e, idx) => {
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

  const deleteCybernetic = () => {
    const updatedCybernetics = cybernetics.filter(
      (cyber, i) => i !== cyberneticIdx
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
        onChange={e => updateCybernetic(e, cyberneticIdx)}
      />
      <label htmlFor='active'>Active</label>
      <input
        id='active'
        type='checkbox'
        name='active'
        value={active}
        onChange={e => activeCheck(e, cyberneticIdx)}
        checked={active}
      />
      <label htmlFor='summary'>Summary</label>
      <input
        id='summary'
        type='text'
        name='summary'
        value={summary}
        onChange={e => updateCybernetic(e, cyberneticIdx)}
      />
      <label htmlFor='rarity'>Rarity</label>
      <input
        id='rarity'
        type='number'
        name='rarity'
        value={rarity}
        onChange={e => updateCybernetic(e, cyberneticIdx)}
      />
      <button onClick={deleteCybernetic}>Delete Cybernetic</button>
    </React.Fragment>
  )
}
