import React from 'react'

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
      <label htmlFor='critName'>Critical Injury</label>
      <input
        type='text'
        name='criticalName'
        value={criticalName}
        onChange={e => updateInjury(e, critIndex)}
      />

      <label htmlFor='rollRange'>Roll Range</label>
      <input
        type='text'
        name='rollRange'
        value={rollRange}
        onChange={e => updateInjury(e, critIndex)}
      />
      <button onClick={healInjury}>Heal</button>
    </React.Fragment>
  )
}
