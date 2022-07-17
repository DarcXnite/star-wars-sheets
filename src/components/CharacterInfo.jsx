import React from 'react'
import Career from './Career'

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
      <details open={true}>
        <summary>Career</summary>
        <Career
          key={career._id}
          careerName={career.career}
          careerSpec={career.specialization}
          careerIndex={idx}
          careers={careers}
          setCharacterForm={setCharacterForm}
          characterForm={characterForm}
        />
      </details>
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
    <div>
      <h2>Character Info</h2>
      <label htmlFor='name'>Name</label>
      <input
        id='name'
        type='text'
        value={name}
        onChange={e =>
          setCharacterForm({ ...characterForm, name: e.target.value })
        }
      />
      <label htmlFor='species'>Species</label>
      <input
        id='species'
        type='text'
        value={species}
        onChange={e =>
          setCharacterForm({ ...characterForm, species: e.target.value })
        }
      />
      <label htmlFor='gender'>Gender</label>
      <input
        id='gender'
        type='text'
        value={gender}
        onChange={e =>
          setCharacterForm({ ...characterForm, gender: e.target.value })
        }
      />
      <label htmlFor='age'>Age</label>
      <input
        id='age'
        type='number'
        value={age}
        onChange={e =>
          setCharacterForm({ ...characterForm, age: e.target.value })
        }
      />
      <label htmlFor='height'>Height</label>
      <input
        id='height'
        type='text'
        value={height}
        onChange={e =>
          setCharacterForm({ ...characterForm, height: e.target.value })
        }
      />
      <label htmlFor='build'>Build</label>
      <input
        id='build'
        type='text'
        value={build}
        onChange={e =>
          setCharacterForm({ ...characterForm, build: e.target.value })
        }
      />
      <label htmlFor='eyes'>Eyes</label>
      <input
        id='eyes'
        type='text'
        value={eyes}
        onChange={e =>
          setCharacterForm({ ...characterForm, eyes: e.target.value })
        }
      />
      <label htmlFor='hair'>Hair</label>
      <input
        id='hair'
        type='text'
        value={hair}
        onChange={e =>
          setCharacterForm({ ...characterForm, hair: e.target.value })
        }
      />
      <label htmlFor='morality'>Morality</label>
      <input
        id='morality'
        type='number'
        value={morality}
        onChange={e =>
          setCharacterForm({ ...characterForm, morality: e.target.value })
        }
      />
      <label htmlFor='conflict'>Conflict</label>
      <input
        id='conflict'
        type='text'
        value={conflict}
        onChange={e =>
          setCharacterForm({ ...characterForm, conflict: e.target.value })
        }
      />
      <div>
        <h3>Careers</h3>
        {allCareers}
        <button onClick={addCareer}>Add Career</button>
      </div>
    </div>
  )
}
