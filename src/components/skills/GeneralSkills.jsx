import GeneralSkill from './skillsComponents/GeneralSkill'
import { v4 as uuidv4 } from 'uuid'

export default function GeneralSkills({
  characterForm: { generalSkills },
  characterForm,
  setCharacterForm,
}) {
  const allGeneralSkills = generalSkills.map((eachSkill, idx) => {
    return (
      <GeneralSkill
        key={eachSkill.skill}
        eachSkill={eachSkill}
        setCharacterForm={setCharacterForm}
        characterForm={characterForm}
        generalSkills={generalSkills}
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
      <div>{allGeneralSkills}</div>
    </div>
  )
}
