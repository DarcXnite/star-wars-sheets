import React from 'react'
import Input from '../ui/Input'

export default function CritInjury({
  crit: { criticalName, rollRange },
  setCharacterForm,
  characterForm,
  critIndex,
}) {
  const updateInjury = (e, idx) => {
    const updatedInjuries = characterForm.criticalInjuries.map((injury, i) => {
      if (idx === i) {
        return { ...injury, [e.target.name]: e.target.value }
      } else {
        return injury
      }
    })
    setCharacterForm({ ...characterForm, criticalInjuries: updatedInjuries })
  }

  const healInjury = () => {
    const updatedInjuries = characterForm.criticalInjuries.filter(
      (inj, i) => i !== critIndex
    )
    setCharacterForm({ ...characterForm, criticalInjuries: updatedInjuries })
  }

  return (
    <React.Fragment>
      <div className='grid grid-cols-2 px-5 py-3 space-x-1.5 bg-gray-800 m-5 rounded-md h-12'>
        <Input
          className='sm:w-45 w-20 h-5'
          type='text'
          name='criticalName'
          value={criticalName}
          onChange={e => updateInjury(e, critIndex)}
        />
        <div className='flex items-center justify-between'>
          <div></div>
          <Input
            className='sm:w-45 w-16 h-5'
            type='text'
            name='rollRange'
            value={rollRange}
            onChange={e => updateInjury(e, critIndex)}
          />
          <button
            className='ml-5 text-white hover:text-red-700 hover:bg-gray-200 rounded flex mb-3'
            onClick={healInjury}
          >
            Heal
          </button>
        </div>
      </div>
    </React.Fragment>
  )
}
