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
      <div className='grid grid-cols-4 px-5 py-3 space-x-1.5 bg-gray-800 m-5 rounded-md h-12'>
        <Input
          className='w-20 h-5'
          id='implantName'
          type='text'
          name='implantName'
          value={implantName}
          onChange={e => updateCybernetic(e, cyberneticIdx)}
        />
        <Input
          className='w-20 h-5'
          id='active'
          type='checkbox'
          name='active'
          value={active}
          onChange={e => activeCheck(e, cyberneticIdx)}
          checked={active}
        />
        <Input
          className='w-25 h-5'
          id='summary'
          type='text'
          name='summary'
          value={summary}
          onChange={e => updateCybernetic(e, cyberneticIdx)}
        />
        <div className='flex items-center justify-between'>
          <div></div>
          <Input
            className='w-20 h-5'
            id='rarity'
            type='number'
            name='rarity'
            value={rarity}
            onChange={e => updateCybernetic(e, cyberneticIdx)}
            min='0'
          />
          <button
            className='ml-5 text-white hover:text-red-700 hover:bg-gray-200 rounded flex mb-3'
            onClick={deleteCybernetic}
          >
            <span className='material-symbols-outlined'>delete</span>
          </button>
        </div>
      </div>
    </React.Fragment>
  )
}
