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
      <h3>General Skills</h3>
      {allGeneralSkills}
    </div>
  )
}
