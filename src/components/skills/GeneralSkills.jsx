import React from 'react'

export default function GeneralSkills({
  characterForm: { generalSkills },
  setCharacterForm,
}) {
  const allGeneralSkills = generalSkills.map(skill => <div>{skill.skill}</div>)
  //   console.log(generalSkills)
  return (
    <div>
      <h3>General Skills</h3>
      {allGeneralSkills}
      <label htmlFor='skill'>Skill</label>
      <input id='skill' type='text' name='skill' value={generalSkills.skill} />
      <label htmlFor='career'>Career</label>
      <input
        id='career'
        type='boolean'
        name='career'
        value={generalSkills.career}
      />
      <label htmlFor='type'>Type</label>
      <input id='type' type='text' name='type' value={generalSkills.type} />
      <label htmlFor='rank'>Rank</label>
      <input id='rank' type='number' name='rank' value={generalSkills.rank} />
    </div>
  )
}
