import Input from '../../ui/Input'

export default function CombatSkill({
  eachSkill: { skill, career, type, rank },
  characterForm,
  setCharacterForm,
  combatSkills,
  idx,
}) {
  const checkboxToggle = (e, idx) => {
    console.log('toggled')
    const updatedSkills = combatSkills.map((skill, i) => {
      if (idx === i) {
        return { ...skill, [e.target.name]: !career }
      } else {
        return skill
      }
    })
    setCharacterForm({ ...characterForm, combatSkills: updatedSkills })
  }

  return (
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
          value={rank}
        />
      </div>
    </div>
  )
}
