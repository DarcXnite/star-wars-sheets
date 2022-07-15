import React from 'react'

export default function Stats({
  characterForm: {
    woundsThreshold,
    wounds,
    strainThreshold,
    strain,
    soakValue,
    rangedDef,
    meleeDef,
    encumThreshold,
    encumCurrent,
  },
  setCharacterForm,
}) {
  return (
    <div>
      <h2>Stats</h2>
      <input
        type='number'
        value={woundsThreshold}
        onChange={e => setCharacterForm({ woundsThreshold: e.target.value })}
      />
      <input
        type='number'
        value={wounds}
        onChange={e => setCharacterForm({ wounds: e.target.value })}
      />
      <input
        type='number'
        value={strainThreshold}
        onChange={e => setCharacterForm({ strainThreshold: e.target.value })}
      />
      <input
        type='number'
        value={strain}
        onChange={e => setCharacterForm({ strain: e.target.value })}
      />
      <input
        type='number'
        value={soakValue}
        onChange={e => setCharacterForm({ soakValue: e.target.value })}
      />
      <input
        type='number'
        value={rangedDef}
        onChange={e => setCharacterForm({ rangedDef: e.target.value })}
      />
      <input
        type='number'
        value={meleeDef}
        onChange={e => setCharacterForm({ meleeDef: e.target.value })}
      />
      <input
        type='number'
        value={encumThreshold}
        onChange={e => setCharacterForm({ encumThreshold: e.target.value })}
      />
      <input
        type='number'
        value={encumCurrent}
        onChange={e => setCharacterForm({ encumCurrent: e.target.value })}
      />
    </div>
  )
}
