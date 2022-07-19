import CustomSkill from './skillsComponents/CustomSkill'

export default function CustomSkills({
  characterForm: { customSkills },
  characterForm,
  setCharacterForm,
}) {
  const allCustomSkills = customSkills.map((customSkill, idx) => {
    const { _id } = customSkills
    return (
      <CustomSkill
        key={_id}
        customSkill={customSkill}
        setCharacterForm={setCharacterForm}
        characterForm={characterForm}
        idx={idx}
      />
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
      <div className='text-center text-white text-xl font-extrabold grid grid-cols-4 bg-gray-800 rounded-md'>
        <span>Skill</span>
        <span>Career</span>
        <span>Type</span>
        <span>Rank</span>
      </div>
      {allCustomSkills}
      <button className='flex' onClick={addCustomSkill}>
        <span className='material-symbols-outlined text-gray-800 hover:text-red-800'>
          add
        </span>
        <span className='text-gray-800 hover:text-red-800'>Add</span>
      </button>
    </div>
  )
}
