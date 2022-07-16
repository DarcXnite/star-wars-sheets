import React from 'react'
import GeneralSkills from './skills/GeneralSkills'
import CombatSkills from './skills/CombatSkills'
import KnowledgeSkills from './skills/KnowledgeSkills'
import CustomSkills from './skills/CustomSkills'

export default function SkillsInfo({ characterForm, setCharacterForm }) {
  return (
    <div>
      <h2>Skills</h2>
      <details>
        <summary>General Skills</summary>
        <GeneralSkills
          characterForm={characterForm}
          setCharacterForm={setCharacterForm}
        />
      </details>
      <details>
        <summary>Combat Skills</summary>
        <CombatSkills
          characterForm={characterForm}
          setCharacterForm={setCharacterForm}
        />
      </details>
      <details>
        <summary>Knowledge Skills</summary>
        <KnowledgeSkills
          characterForm={characterForm}
          setCharacterForm={setCharacterForm}
        />
      </details>
      <details>
        <summary>Custom Skills</summary>
        <CustomSkills
          characterForm={characterForm}
          setCharacterForm={setCharacterForm}
        />
      </details>
    </div>
  )
}
