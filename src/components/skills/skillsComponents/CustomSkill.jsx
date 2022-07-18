import React from 'react'
import Input from '../../ui/Input'

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
      <div className='flex flex-wrap px-5 py-3 space-x-1.5'>
        <Input
          label='Skill:'
          id='skill'
          type='text'
          name='skill'
          value={skill}
          onChange={e => updateCustomSkill(e, idx)}
        />
        <Input
          label='Career:'
          id='career'
          type='checkbox'
          name='career'
          value={career}
          onChange={e => careerCheck(e, idx)}
          checked={career}
        />
        <Input
          label='Type:'
          id='type'
          type='text'
          name='type'
          value={type}
          onChange={e => updateCustomSkill(e, idx)}
        />
        <Input
          label='Rank:'
          id='rank'
          type='number'
          name='rank'
          value={rank}
          onChange={e => updateCustomSkill(e, idx)}
        />
        <button onClick={deleteSkill}>Delete Skill</button>
      </div>
    </React.Fragment>
  )
}
