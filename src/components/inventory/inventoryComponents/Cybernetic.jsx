import React from 'react'
import Input from '../../ui/Input'

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
      <Input
        label='Implant Name:'
        id='implantName'
        type='text'
        name='implantName'
        value={implantName}
        onChange={e => updateCybernetic(e, cyberneticIdx)}
      />
      <Input
        label='Active:'
        id='active'
        type='checkbox'
        name='active'
        value={active}
        onChange={e => activeCheck(e, cyberneticIdx)}
        checked={active}
      />
      <Input
        label='Summary'
        id='summary'
        type='text'
        name='summary'
        value={summary}
        onChange={e => updateCybernetic(e, cyberneticIdx)}
      />
      <Input
        label='Rarity:'
        id='rarity'
        type='number'
        name='rarity'
        value={rarity}
        onChange={e => updateCybernetic(e, cyberneticIdx)}
        min='0'
      />
      <button onClick={deleteCybernetic}>Delete Cybernetic</button>
    </React.Fragment>
  )
}
