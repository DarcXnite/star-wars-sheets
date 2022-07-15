import React from 'react'

export default function Characteristics({
  character,
  setCharacterForm,
  characterForm: { brawn, agility, intellect, cunning, willpower, presence },
}) {
  return (
    <div>
      <div className='container'>
        <div>
          <label htmlFor='brawn'>Brawn</label>
          <input
            id='brawn'
            type='number'
            value={brawn}
            onChange={e => setCharacterForm({ brawn: e.target.value })}
            min='1'
            max='6'
          />
        </div>
        <input
          type='number'
          value={agility}
          onChange={e => setCharacterForm({ agility: e.target.value })}
          min='1'
          max='6'
        />
        <input
          type='number'
          value={intellect}
          onChange={e => setCharacterForm({ intellect: e.target.value })}
          min='1'
          max='6'
        />
        <input
          type='number'
          value={cunning}
          onChange={e => setCharacterForm({ cunning: e.target.value })}
          min='1'
          max='6'
        />
        <input
          type='number'
          value={willpower}
          onChange={e => setCharacterForm({ willpower: e.target.value })}
          min='1'
          max='6'
        />
        <input
          type='number'
          value={presence}
          onChange={e => setCharacterForm({ presence: e.target.value })}
          min='1'
          max='6'
        />
      </div>
    </div>
  )
}
