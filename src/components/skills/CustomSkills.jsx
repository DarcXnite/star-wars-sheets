import { useState } from 'react'

export default function CustomSkills({
  characterForm: { customSkills },
  setCharacterForm,
}) {
  const [newCustomSkills, setNewCustomSkills] = useState({
    skill: '',
    career: false,
    type: '',
    rank: 0,
  })
  return (
    <div>
      <h2>Custom Skills</h2>
      <label htmlFor='skill'>Skill</label>
      <input id='skill' type='text' name='skill' value={customSkills.skill} />
      <label htmlFor='career'>Career</label>
      <input
        id='career'
        type='boolean'
        name='career'
        value={customSkills.career}
      />
      <label htmlFor='type'>Type</label>
      <input id='type' type='text' name='type' value={customSkills.type} />
      <label htmlFor='rank'>Rank</label>
      <input id='rank' type='number' name='rank' value={customSkills.rank} />
    </div>
  )
}
