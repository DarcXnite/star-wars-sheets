import React from 'react'
import GeneralSkills from './skills/GeneralSkills'
import CombatSkills from './skills/CombatSkills'
import KnowledgeSkills from './skills/KnowledgeSkills'
import CustomSkills from './skills/CustomSkills'

export default function SkillsInfo({ characterForm, setCharacterForm }) {
  return (
    <div>
      <h2>Skills</h2>
      <GeneralSkills
        characterForm={characterForm}
        setCharacterForm={setCharacterForm}
      />
      <CombatSkills />
      <KnowledgeSkills />
      <CustomSkills />
    </div>
  )
}
