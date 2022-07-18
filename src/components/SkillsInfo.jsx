import React from 'react'
import GeneralSkills from './skills/GeneralSkills'
import CombatSkills from './skills/CombatSkills'
import KnowledgeSkills from './skills/KnowledgeSkills'
import CustomSkills from './skills/CustomSkills'

export default function SkillsInfo({ characterForm, setCharacterForm }) {
  return (
    <div className='container mx-auto bg-slate-500 p-10 rounded'>
      <h2 className='text-2xl text-gray-800 font-extrabold starjedi'>Skills</h2>
      <details>
        <summary className='text-gray-800 text-xl font-bold'>
          General Skills
        </summary>
        <GeneralSkills
          characterForm={characterForm}
          setCharacterForm={setCharacterForm}
        />
      </details>
      <details>
        <summary className='text-gray-800 text-xl font-bold'>
          Combat Skills
        </summary>
        <CombatSkills
          characterForm={characterForm}
          setCharacterForm={setCharacterForm}
        />
      </details>
      <details>
        <summary className='text-gray-800 text-xl font-bold'>
          Knowledge Skills
        </summary>
        <KnowledgeSkills
          characterForm={characterForm}
          setCharacterForm={setCharacterForm}
        />
      </details>
      <details>
        <summary className='text-gray-800 text-xl font-bold'>
          Custom Skills
        </summary>
        <CustomSkills
          characterForm={characterForm}
          setCharacterForm={setCharacterForm}
        />
      </details>
    </div>
  )
}
