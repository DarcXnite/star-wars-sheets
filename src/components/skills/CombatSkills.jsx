import React from 'react'

export default function CombatSkills({
  characterForm: { combatSkills },
  setCharacterForm,
}) {
  const allCombatSkills = combatSkills.map(skill => <div>{skill.skill}</div>)
  return (
    <div>
      <h3>Combat Skills</h3>
      {allCombatSkills}
      <label htmlFor='skill'>Skill</label>
      <input id='skill' type='text' name='skill' value={combatSkills.skill} />
      <label htmlFor='career'>Career</label>
      <input
        id='career'
        type='boolean'
        name='career'
        value={combatSkills.career}
      />
      <label htmlFor='type'>Type</label>
      <input id='type' type='text' name='type' value={combatSkills.type} />
      <label htmlFor='rank'>Rank</label>
      <input id='rank' type='number' name='rank' value={combatSkills.rank} />
    </div>
  )
}
