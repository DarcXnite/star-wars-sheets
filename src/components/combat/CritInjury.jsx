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
      <div className='grid grid-cols-3 px-5 py-3 space-x-1.5 bg-gray-800 m-5 rounded-md h-12'>
        <Input
          className='w-45 h-5'
          type='text'
          name='criticalName'
          value={criticalName}
          onChange={e => updateInjury(e, critIndex)}
        />

        <Input
          className='w-45 h-5'
          type='text'
          name='rollRange'
          value={rollRange}
          onChange={e => updateInjury(e, critIndex)}
        />
        <button onClick={healInjury}>Heal</button>
      </div>
    </React.Fragment>
  )
}
