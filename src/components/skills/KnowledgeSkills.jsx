import React from 'react'

export default function KnowledgeSkills({
  characterForm: { knowledgeSkills },
  setCharacterForm,
  characterForm,
}) {
  const allKnowledgeSkills = knowledgeSkills.map(eachSkill => {
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
      <h3>Knowledge Skills</h3>
      {allKnowledgeSkills}
      {/* <label htmlFor='skill'>Skill</label>
      <input
        id='skill'
        type='text'
        name='skill'
        value={knowledgeSkills[0].skill}
      />
      <label htmlFor='career'>Career</label>
      <input
        id='career'
        type='boolean'
        name='career'
        // value={knowledgeSkills.career}
      />
      <label htmlFor='type'>Type</label>
      <input id='type' type='text' name='type' />
      <label htmlFor='rank'>Rank</label>
      <input id='rank' type='number' name='rank' /> */}
    </div>
  )
}
