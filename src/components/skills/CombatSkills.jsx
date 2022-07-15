import React from 'react'

export default function CombatSkills({
  characterForm: { combatSkills },
  setCharacterForm,
}) {
  const allCombatSkills = combatSkills.map(eachSkill => {
    const { skill, career, type, rank } = eachSkill

    return (
      <div key={skill}>
        <p>{`${skill} (${type})`}</p>
        <label htmlFor='career'>Career</label>
        <input id='career' type='boolean' name='career' value={career} />
        <label htmlFor='rank'>Rank</label>
        <input id='rank' type='number' name='rank' value={rank} />
      </div>
    )
  })
  return (
    <div>
      <h3>Combat Skills</h3>
      {allCombatSkills}
    </div>
  )
}
