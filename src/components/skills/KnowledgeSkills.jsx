import KnowledgeSkill from './skillsComponents/KnowledgeSkill'

export default function KnowledgeSkills({
  characterForm: { knowledgeSkills },
  setCharacterForm,
  characterForm,
}) {
  const allKnowledgeSkills = knowledgeSkills.map((eachSkill, idx) => {
    const { skill } = eachSkill

    return (
      <KnowledgeSkill
        key={skill}
        eachSkill={eachSkill}
        setCharacterForm={setCharacterForm}
        characterForm={characterForm}
        knowledgeSkills={knowledgeSkills}
        idx={idx}
      />
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
