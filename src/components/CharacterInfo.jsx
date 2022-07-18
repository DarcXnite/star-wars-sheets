import React from 'react'
import Career from './Career'
import Input from './ui/Input'

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
}) {
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
      <h2 className='starjedi'>Character info</h2>
      <a
        href='https://star-wars-rpg-ffg.fandom.com/wiki/Category:Species'
        target='_blank'
        rel='noreferrer'
      >
        Species Guide
      </a>
      <div className='flex flex-wrap px-5 py-3 space-x-1.5'>
        <Input
          label='Name:'
          id='name'
          type='text'
          value={name}
          onChange={e =>
            setCharacterForm({ ...characterForm, name: e.target.value })
          }
        />
        <Input
          label='Species:'
          id='species'
          type='text'
          value={species}
          onChange={e =>
            setCharacterForm({ ...characterForm, species: e.target.value })
          }
        />
        <Input
          label='Gender:'
          id='gender'
          type='text'
          value={gender}
          onChange={e =>
            setCharacterForm({ ...characterForm, gender: e.target.value })
          }
        />
        <Input
          label='Age:'
          id='age'
          type='number'
          value={age}
          onChange={e =>
            setCharacterForm({ ...characterForm, age: e.target.value })
          }
        />
        <Input
          label='Height:'
          id='height'
          type='text'
          value={height}
          onChange={e =>
            setCharacterForm({ ...characterForm, height: e.target.value })
          }
        />
        <Input
          label='Build:'
          id='build'
          type='text'
          value={build}
          onChange={e =>
            setCharacterForm({ ...characterForm, build: e.target.value })
          }
        />
        <Input
          label='Eyes:'
          id='eyes'
          type='text'
          value={eyes}
          onChange={e =>
            setCharacterForm({ ...characterForm, eyes: e.target.value })
          }
        />
        <Input
          label='Hair:'
          id='hair'
          type='text'
          value={hair}
          onChange={e =>
            setCharacterForm({ ...characterForm, hair: e.target.value })
          }
        />
        <Input
          label='Morality:'
          id='morality'
          type='number'
          value={morality}
          onChange={e =>
            setCharacterForm({ ...characterForm, morality: e.target.value })
          }
        />
        <Input
          label='Conflict:'
          id='conflict'
          type='text'
          value={conflict}
          onChange={e =>
            setCharacterForm({ ...characterForm, conflict: e.target.value })
          }
        />
      </div>
      <div>
        <details open={true}>
          <summary>
            Careers{' '}
            <a
              href='https://star-wars-rpg-ffg.fandom.com/wiki/Category:Careers'
              target='_blank'
              rel='noreferrer'
            >
              Careers Guide
            </a>
          </summary>
          {allCareers}
          <button onClick={addCareer}>
            <span className='material-symbols-outlined'>add</span>
          </button>
        </details>
      </div>
    </div>
  )
}
