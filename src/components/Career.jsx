import React from 'react'

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
      <label htmlFor='career'>Career</label>
      <input
        id='career'
        type='text'
        name='career'
        value={careerName}
        onChange={e => updateCareer(e, careerIndex)}
      />

      <label htmlFor='spec'>Specialization</label>
      <input
        id='spec'
        type='text'
        name='specialization'
        value={careerSpec}
        onChange={e => updateCareer(e, careerIndex)}
      />
      <button onClick={removeCareer}>Remove Career</button>
    </React.Fragment>
  )
}
