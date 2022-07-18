import Input from '../../ui/Input'

export default function CombatSkill({
  eachSkill: { skill, career, type, rank },
  characterForm,
  setCharacterForm,
  knowledgeSkills,
  idx,
}) {
  const checkboxToggle = (e, idx) => {
    console.log('toggled')
    const updatedSkills = knowledgeSkills.map((skill, i) => {
      if (idx === i) {
        return { ...skill, [e.target.name]: !career }
      } else {
        return skill
      }
    })
    setCharacterForm({ ...characterForm, knowledgeSkills: updatedSkills })
  }

  return (
    <div>
      <p>{`${skill} (${type})`}</p>
      <div className='flex flex-wrap px-5 py-3 space-x-1.5'>
        <Input
          label='Career:'
          id='career'
          type='checkbox'
          name='career'
          onChange={e => checkboxToggle(e, idx)}
          checked={career}
        />
        <Input label='Rank:' id='rank' type='number' name='rank' value={rank} />
      </div>
    </div>
  )
}
