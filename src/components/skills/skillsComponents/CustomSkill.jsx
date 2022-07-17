import React from 'react'

export default function CustomSkill({
  customSkill: { skill, career, type, rank },
  setCharacterForm,
  characterForm,
  idx,
}) {
  const updateCustomSkill = (e, idx) => {
    const updatedCustomSkills = characterForm.customSkills.map(
      (customSkill, i) => {
        if (idx === i) {
          return { ...customSkill, [e.target.name]: e.target.value }
        } else {
          return customSkill
        }
      }
    )
    setCharacterForm({ ...characterForm, customSkills: updatedCustomSkills })
  }

  const careerCheck = (e, idx) => {
    const updatedCustomSkills = characterForm.customSkills.map(
      (customSkill, i) => {
        if (idx === i) {
          return { ...customSkill, [e.target.name]: !career }
        } else {
          return customSkill
        }
      }
    )
    setCharacterForm({ ...characterForm, customSkills: updatedCustomSkills })
  }

  const deleteSkill = () => {
    const filteredSkills = characterForm.customSkills.filter(
      (eachSkill, i) => i !== idx
    )
    setCharacterForm({ ...characterForm, customSkills: filteredSkills })
  }

  return (
    <React.Fragment>
      <label htmlFor='skill'>Skill</label>
      <input
        id='skill'
        type='text'
        name='skill'
        value={skill}
        onChange={e => updateCustomSkill(e, idx)}
      />
      <label htmlFor='career'>Career</label>
      <input
        id='career'
        type='checkbox'
        name='career'
        value={career}
        onChange={e => careerCheck(e, idx)}
        checked={career}
      />
      <label htmlFor='type'>Type</label>
      <input
        id='type'
        type='text'
        name='type'
        value={type}
        onChange={e => updateCustomSkill(e, idx)}
      />
      <label htmlFor='rank'>Rank</label>
      <input
        id='rank'
        type='number'
        name='rank'
        value={rank}
        onChange={e => updateCustomSkill(e, idx)}
      />
      <button onClick={deleteSkill}>Delete Skill</button>
    </React.Fragment>
  )
}
