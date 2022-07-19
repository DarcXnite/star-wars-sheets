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
      <div className='grid grid-cols-2 px-5 py-3 space-x-1.5 bg-gray-800 m-5 rounded-md h-12'>
        <Input
          className='sm:w-45 w-20 h-5'
          id='career'
          type='text'
          name='career'
          value={careerName}
          onChange={e => updateCareer(e, careerIndex)}
        />
        <div className='flex items-center justify-between'>
          <div> </div>
          <Input
            className='sm:w-45 w-20 h-5'
            id='spec'
            type='text'
            name='specialization'
            value={careerSpec}
            onChange={e => updateCareer(e, careerIndex)}
          />
          <button
            className='ml-5 text-white hover:text-red-700 hover:bg-gray-200 rounded flex mb-3'
            onClick={removeCareer}
          >
            <span className='material-symbols-outlined'>delete</span>
          </button>
        </div>
      </div>
    </React.Fragment>
  )
}
