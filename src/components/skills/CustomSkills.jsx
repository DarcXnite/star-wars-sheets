import CustomSkill from './skillsComponents/CustomSkill'

export default function CustomSkills({
  characterForm: { customSkills },
  characterForm,
  setCharacterForm,
}) {
  const allCustomSkills = customSkills.map((customSkill, idx) => {
    const { _id } = customSkills
    return (
      <details>
        <summary>Custom Skill</summary>
        <CustomSkill
          key={_id}
          customSkill={customSkill}
          setCharacterForm={setCharacterForm}
          characterForm={characterForm}
          idx={idx}
        />
      </details>
    )
  })

  const initialCustomSkillForm = {
    skill: '',
    career: false,
    type: '',
    rank: 0,
  }

  const addCustomSkill = () => {
    customSkills.push(initialCustomSkillForm)
    setCharacterForm({ ...characterForm, customSkills })
  }

  return (
    <div>
      <h2>Custom Skills</h2>
      {allCustomSkills}
      <button onClick={addCustomSkill}>Add a Custom Skill</button>
    </div>
  )
}
