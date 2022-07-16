import React from 'react'
import CombatSkill from './skillsComponents/CombatSkill'

export default function CombatSkills({
  characterForm: { combatSkills },
  characterForm,
  setCharacterForm,
}) {
  const allCombatSkills = combatSkills.map((eachSkill, idx) => {
    const { skill } = eachSkill

    return (
      <CombatSkill
        key={skill}
        eachSkill={eachSkill}
        setCharacterForm={setCharacterForm}
        characterForm={characterForm}
        combatSkills={combatSkills}
        idx={idx}
      />
    )
  })
  return (
    <div>
      <h3>Combat Skills</h3>
      {allCombatSkills}
    </div>
  )
}
