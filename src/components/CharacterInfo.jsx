import React from 'react'
import Career from './Career'
import Input from './ui/Input'
import ReactTooltip from 'react-tooltip'
import { useState } from 'react'

export default function CharacterInfo({
  setCharacterForm,
  characterForm: {
    name,
    species,
    gender,
    age,
    height,
    build,
    hair,
    eyes,
    morality,
    conflict,
    careers,
  },
  characterForm,
  saveCharacterSheet,
}) {
  const [careerTip, setCareerTip] = useState(false)
  const [showSpeciesTip, setShowSpeciesTip] = useState(false)

  const allCareers = careers.map((career, idx) => {
    return (
      <Career
        key={career._id}
        careerName={career.career}
        careerSpec={career.specialization}
        careerIndex={idx}
        careers={careers}
        setCharacterForm={setCharacterForm}
        characterForm={characterForm}
      />
    )
  })

  const careerForm = {
    career: '',
    specialization: '',
  }

  const addCareer = () => {
    careers.push(careerForm)
    setCharacterForm({ ...characterForm, careers })
  }

  return (
    <div className='container mx-auto bg-slate-500 p-10 rounded'>
      <h2 className='text-2xl text-gray-800 font-extrabold'>
        <div className='flex items-center justify-between'>
          <div>
            <span className='starjedi'>Character info</span>
            <a
              href='https://star-wars-rpg-ffg.fandom.com/wiki/Category:Species'
              target='_blank'
              rel='noreferrer'
              data-tip='Species Guide'
              data-for='species'
              onMouseEnter={() => setShowSpeciesTip(true)}
              onMouseLeave={() => setShowSpeciesTip(false)}
              className='material-symbols-outlined ml-2'
            >
              help
            </a>
            <div className={`${!showSpeciesTip ? 'hidden' : ''}`}>
              <ReactTooltip id='species' />
            </div>
          </div>
          <div>
            <button className='hover:text-red-700' onClick={saveCharacterSheet}>
              Save
            </button>
          </div>
        </div>
      </h2>

      <div className='sm:grid grid-cols-5 px-5 py-3 space-x-1.5 bg-gray-800 m-5 rounded-md h-50 flex flex-wrap items-center justify-center'>
        <Input
          label='Name'
          className='w-50 h-7'
          id='name'
          type='text'
          value={name}
          onChange={e =>
            setCharacterForm({ ...characterForm, name: e.target.value })
          }
        />
        <Input
          label='Species'
          className='w-20 h-7'
          id='species'
          type='text'
          value={species}
          onChange={e =>
            setCharacterForm({ ...characterForm, species: e.target.value })
          }
        />
        <Input
          label='Gender'
          className='w-20 h-7'
          id='gender'
          type='text'
          value={gender}
          onChange={e =>
            setCharacterForm({ ...characterForm, gender: e.target.value })
          }
        />
        <Input
          className='w-20 h-7'
          label='Age'
          id='age'
          type='number'
          value={age}
          onChange={e =>
            setCharacterForm({ ...characterForm, age: e.target.value })
          }
          min='0'
        />
        <Input
          label='Height'
          className='w-20 h-7'
          id='height'
          type='text'
          value={height}
          onChange={e =>
            setCharacterForm({ ...characterForm, height: e.target.value })
          }
        />
        <Input
          label='Build'
          className='w-20 h-7'
          id='build'
          type='text'
          value={build}
          onChange={e =>
            setCharacterForm({ ...characterForm, build: e.target.value })
          }
        />
        <Input
          label='Eyes'
          className='w-20 h-7'
          id='eyes'
          type='text'
          value={eyes}
          onChange={e =>
            setCharacterForm({ ...characterForm, eyes: e.target.value })
          }
        />
        <Input
          label='Hair'
          className='w-20 h-7'
          id='hair'
          type='text'
          value={hair}
          onChange={e =>
            setCharacterForm({ ...characterForm, hair: e.target.value })
          }
        />
        <Input
          className='w-20 h-7'
          label='Morality'
          id='morality'
          type='number'
          value={morality}
          onChange={e =>
            setCharacterForm({ ...characterForm, morality: e.target.value })
          }
          min='0'
        />
        <Input
          className='w-20 h-7'
          label='Conflict'
          id='conflict'
          type='number'
          value={conflict}
          onChange={e =>
            setCharacterForm({ ...characterForm, conflict: e.target.value })
          }
          min='0'
        />
      </div>
      <div>
        <details>
          <summary className='text-gray-800 text-xl font-bold'>Careers</summary>
          <div className='text-center text-white text-xl font-extrabold grid grid-cols-2 bg-gray-800 rounded-md'>
            <span className='flex items-center justify-center'>
              <span>Career</span>
              <a
                href='https://star-wars-rpg-ffg.fandom.com/wiki/Category:Careers'
                target='_blank'
                rel='noreferrer'
                data-tip='Careers Guide'
                data-for='career'
                onMouseEnter={() => setCareerTip(true)}
                onMouseLeave={() => setCareerTip(false)}
                className='material-symbols-outlined ml-2'
              >
                help
              </a>
              <div className={`${!careerTip ? 'hidden' : ''}`}>
                <ReactTooltip id='career' />
              </div>
            </span>
            <span>Specialization</span>
          </div>
          {allCareers}
          <button className='flex' onClick={addCareer}>
            <span className='material-symbols-outlined text-gray-800 hover:text-red-800'>
              add
            </span>
            <span className='text-gray-800 hover:text-red-800'>Add</span>
          </button>{' '}
        </details>
      </div>
    </div>
  )
}
