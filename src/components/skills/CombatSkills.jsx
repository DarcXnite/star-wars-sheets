import React from 'react'
import CombatSkill from './skillsComponents/CombatSkill'
import LightsaberSkill from './skillsComponents/LightsaberSkill'
import { v4 as uuidv4 } from 'uuid'

export default function CombatSkills({
  characterForm: { combatSkills },
  characterForm,
  setCharacterForm,
}) {
  const allCombatSkills = combatSkills.map((eachSkill, idx) => {
    return (
      <React.Fragment>
        <div>
          {eachSkill.skill === 'Lightsaber' ? (
            <LightsaberSkill
              key={eachSkill.skill}
              eachSkill={eachSkill}
              setCharacterForm={setCharacterForm}
              characterForm={characterForm}
              combatSkills={combatSkills}
              idx={idx}
            />
          ) : (
            <CombatSkill
              key={eachSkill.skill}
              eachSkill={eachSkill}
              setCharacterForm={setCharacterForm}
              characterForm={characterForm}
              combatSkills={combatSkills}
              idx={idx}
            />
          )}
        </div>
      </React.Fragment>
    )
  })
  return (
    <div>
      <div className='text-center text-white text-xl font-extrabold grid grid-cols-3 bg-gray-800 rounded-md'>
        <span>Skill</span>
        <span>Career</span>
        <span>Rank</span>
      </div>
      {allCombatSkills}
    </div>
  )
}
