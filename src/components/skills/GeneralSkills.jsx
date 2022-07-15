import React from 'react'

export default function GeneralSkills({
  characterForm: { generalSkills },
  setCharacterForm,
}) {
  const allGeneralSkills = generalSkills.map(eachSkill => {
    const { skill, career, type, rank } = eachSkill

    return (
      <div>
        <p>{`${skill} (${type})`}</p>
        <label htmlFor='career'>Career</label>
        <input id='career' type='boolean' name='career' value={career} />

        <label htmlFor='rank'>Rank</label>
        <input id='rank' type='number' name='rank' value={rank} />
      </div>
    )
  })
  return (
    <div>
      <h3>General Skills</h3>
      {allGeneralSkills}
    </div>
  )
}
