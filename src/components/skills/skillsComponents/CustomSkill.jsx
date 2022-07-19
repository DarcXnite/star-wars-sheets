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
      <div className='grid grid-cols-4 px-5 py-3 space-x-1.5 bg-gray-800 m-5 rounded-md h-12'>
        <Input
          className='w-20 h-5'
          id='skill'
          type='text'
          name='skill'
          value={skill}
          onChange={e => updateCustomSkill(e, idx)}
        />
        <Input
          id='career'
          type='checkbox'
          name='career'
          value={career}
          onChange={e => careerCheck(e, idx)}
          checked={career}
        />
        <Input
          className='w-20 h-5'
          id='type'
          type='text'
          name='type'
          value={type}
          onChange={e => updateCustomSkill(e, idx)}
        />
        <div className='flex items-center justify-between'>
          <div></div>
          <Input
            className='w-20 h-6'
            id='rank'
            type='number'
            name='rank'
            value={rank}
            onChange={e => updateCustomSkill(e, idx)}
          />
          <button
            className='ml-5 text-white hover:text-red-700 hover:bg-gray-200 rounded flex mb-3'
            onClick={deleteSkill}
          >
            <span className='material-symbols-outlined'>delete</span>
          </button>
        </div>
      </div>
    </React.Fragment>
  )
}
