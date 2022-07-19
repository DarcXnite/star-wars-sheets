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

  const lightsaberType = (e, idx) => {
    console.log(e.target.name)
    const updatedLightsaber = combatSkills.map((skill, i) => {
      if (idx === i) {
        return { ...skill, [e.target.name]: e.target.value }
      } else {
        return skill
      }
    })
    setCharacterForm({ ...characterForm, combatSkills: updatedLightsaber })
  }

  const updateRank = (e, idx) => {
    const updatedSkills = combatSkills.map((skill, i) => {
      if (idx === i) {
        return { ...skill, [e.target.name]: e.target.value }
      } else {
        return skill
      }
    })
    setCharacterForm({ ...characterForm, combatSkills: updatedSkills })
  }

  return (
    <div className='grid grid-cols-3 px-5 py-3 space-x-1.5 bg-gray-800 m-5 rounded-md h-12'>
      <p className='flex flex-wrap text-white sm:text-lg text-xs font-bold'>
        {`${skill}`}
        {/* <Input className='w-20 h-5' type='text' value={type} /> */}
        <select
          className='text-black ml-4 rounded'
          name='type'
          id='type'
          value={type}
          onChange={e => lightsaberType(e, idx)}
        >
          <option value='brawn'>Brawn</option>
          <option value='agility'>Agility</option>
          <option value='intellect'>Intellect</option>
          <option value='cunning'>Cunning</option>
          <option value='willpower'>Willpower</option>
          <option value='presence'>Presence</option>
        </select>
      </p>
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
      />
    </div>
  )
}
