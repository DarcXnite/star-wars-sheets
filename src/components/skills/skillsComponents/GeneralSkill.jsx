import Input from '../../ui/Input'

export default function CombatSkill({
  eachSkill: { skill, career, type, rank },
  characterForm,
  setCharacterForm,
  generalSkills,
  idx,
}) {
  const checkboxToggle = (e, idx) => {
    console.log('toggled')
    const updatedSkills = generalSkills.map((skill, i) => {
      if (idx === i) {
        return { ...skill, [e.target.name]: !career }
      } else {
        return skill
      }
    })
    setCharacterForm({ ...characterForm, generalSkills: updatedSkills })
  }
  const updateRank = (e, idx) => {
    const updatedSkills = generalSkills.map((skill, i) => {
      if (idx === i) {
        return { ...skill, [e.target.name]: e.target.value }
      } else {
        return skill
      }
    })
    setCharacterForm({ ...characterForm, generalSkills: updatedSkills })
  }

  return (
    <div>
      <div>
        <div className='grid grid-cols-3 px-5 py-3 space-x-1.5 bg-gray-800 m-5 rounded-md h-12'>
          <p className='text-white sm:text-lg text-xs font-bold'>{`${skill} (${type})`}</p>
          <Input
            id='career'
            type='checkbox'
            name='career'
            onChange={e => checkboxToggle(e, idx)}
            checked={career}
          />
          <Input
            className='w-20 h-5'
            id='rank'
            type='number'
            name='rank'
            onChange={e => updateRank(e, idx)}
            value={rank}
            min='0'
            max='6'
          />
        </div>
      </div>
    </div>
  )
}
