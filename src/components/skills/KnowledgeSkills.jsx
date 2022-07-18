import KnowledgeSkill from './skillsComponents/KnowledgeSkill'
import { v4 as uuidv4 } from 'uuid'

export default function KnowledgeSkills({
  characterForm: { knowledgeSkills },
  setCharacterForm,
  characterForm,
}) {
  const allKnowledgeSkills = knowledgeSkills.map((eachSkill, idx) => {
    return (
      <KnowledgeSkill
        key={eachSkill.skill}
        eachSkill={eachSkill}
        setCharacterForm={setCharacterForm}
        characterForm={characterForm}
        knowledgeSkills={knowledgeSkills}
        idx={idx}
      />
    )
  })
  return (
    <div>
      <div className='text-center text-white text-xl font-extrabold grid grid-cols-3 bg-gray-800 rounded-md'>
        <span>Skill</span>
        <span>Career</span>
        <span>Rank</span>
      </div>
      {allKnowledgeSkills}
    </div>
  )
}
