import React from 'react'

export default function CharacterInfo({
  character,
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
  },
}) {
  return (
    <div>
      <h2>Character Info</h2>
      <input
        type='text'
        value={name}
        onChange={e => setCharacterForm({ name: e.target.value })}
      />
      <input
        type='text'
        value={species}
        onChange={e => setCharacterForm({ species: e.target.value })}
      />
      <input
        type='text'
        value={gender}
        onChange={e => setCharacterForm({ gender: e.target.value })}
      />
      <input
        type='number'
        value={age}
        onChange={e => setCharacterForm({ age: e.target.value })}
      />
      <input
        type='text'
        value={height}
        onChange={e => setCharacterForm({ height: e.target.value })}
      />
      <input
        type='text'
        value={build}
        onChange={e => setCharacterForm({ build: e.target.value })}
      />
      <input
        type='text'
        value={eyes}
        onChange={e => setCharacterForm({ eyes: e.target.value })}
      />
      <input
        type='text'
        value={hair}
        onChange={e => setCharacterForm({ hair: e.target.value })}
      />
      <input
        type='number'
        value={morality}
        onChange={e => setCharacterForm({ morality: e.target.value })}
      />
      <input
        type='text'
        value={conflict}
        onChange={e => setCharacterForm({ conflict: e.target.value })}
      />
    </div>
  )
}
