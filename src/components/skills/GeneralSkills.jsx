import GeneralSkill from './skillsComponents/GeneralSkill'

export default function GeneralSkills({
  characterForm: { generalSkills },
  characterForm,
  setCharacterForm,
}) {
  const allGeneralSkills = generalSkills.map((eachSkill, idx) => {
    const { skill } = eachSkill

    return (
      <GeneralSkill
        key={skill}
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
