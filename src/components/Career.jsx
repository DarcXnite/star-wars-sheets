import React from 'react'
import Input from './ui/Input'

export default function Careers({
  careerName,
  careerSpec,
  careerIndex,
  careers,
  setCharacterForm,
  characterForm,
}) {
  const updateCareer = (e, idx) => {
    const updatedCareers = careers.map((eachCareer, i) => {
      if (idx === i) {
        return { ...eachCareer, [e.target.name]: e.target.value }
      } else {
        return eachCareer
      }
    })
    setCharacterForm({ ...characterForm, careers: updatedCareers })
  }

  const removeCareer = () => {
    const filteredCareers = careers.filter((car, i) => i !== careerIndex)
    setCharacterForm({ ...characterForm, careers: filteredCareers })
  }

  return (
    <React.Fragment>
      <div className='flex flex-wrap px-5 py-3 space-x-1.5'>
        <Input
          label='Career:'
          id='career'
          type='text'
          name='career'
          value={careerName}
          onChange={e => updateCareer(e, careerIndex)}
        />
        <Input
          label='Specialization:'
          id='spec'
          type='text'
          name='specialization'
          value={careerSpec}
          onChange={e => updateCareer(e, careerIndex)}
        />
        <button onClick={removeCareer}>Remove Career</button>
      </div>
    </React.Fragment>
  )
}
