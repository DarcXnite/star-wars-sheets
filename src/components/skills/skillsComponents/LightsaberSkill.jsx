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
      <p>
        {`${skill}`}
        <input type='text' value={type} />
      </p>
      <label htmlFor='career'>Career</label>
      <input
        id='career'
        type='checkbox'
        name='career'
        onChange={e => checkboxToggle(e, idx)}
        checked={career}
      />
      <label htmlFor='rank'>Rank</label>
      <input id='rank' type='number' name='rank' value={rank} />
    </div>
  )
}
