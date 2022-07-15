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
    forcePool,
  },
  characterForm,
  setCharacterForm,
}) {
  return (
    <div>
      <h2>Stats</h2>

      <div>
        <h2>Wounds</h2>
        <input
          id='woundsThres'
          type='number'
          value={woundsThreshold}
          onChange={e =>
            setCharacterForm({
              ...characterForm,
              woundsThreshold: parseInt(e.target.value),
            })
          }
        />
        <label htmlFor='woundsThres'>Threshold</label>
        <input
          id='currentWounds'
          type='number'
          value={wounds}
          onChange={e =>
            setCharacterForm({
              ...characterForm,
              wounds: parseInt(e.target.value),
            })
          }
        />
        <label htmlFor='currentWounds'>Current</label>
      </div>

      <div>
        <h3>Strain</h3>
        <input
          id='strainThres'
          type='number'
          value={strainThreshold}
          onChange={e =>
            setCharacterForm({
              ...characterForm,
              strainThreshold: parseInt(e.target.value),
            })
          }
        />
        <label htmlFor='strainThres'>Threshold</label>
        <input
          id='currentStrain'
          type='number'
          value={strain}
          onChange={e =>
            setCharacterForm({
              ...characterForm,
              strain: parseInt(e.target.value),
            })
          }
        />
        <label htmlFor='currentStrain'>Current</label>
      </div>

      <div>
        <h3>Soak</h3>
        <input
          type='number'
          value={soakValue}
          onChange={e =>
            setCharacterForm({
              ...characterForm,
              soakValue: parseInt(e.target.value),
            })
          }
        />
      </div>

      <div>
        <h3>Defense</h3>
        <input
          id='rangedDef'
          type='number'
          value={rangedDef}
          onChange={e =>
            setCharacterForm({
              ...characterForm,
              rangedDef: parseInt(e.target.value),
            })
          }
        />
        <label htmlFor='rangedDef'>Ranged</label>
        <input
          id='meleeDef'
          type='number'
          value={meleeDef}
          onChange={e =>
            setCharacterForm({
              ...characterForm,
              meleeDef: parseInt(e.target.value),
            })
          }
        />
        <label htmlFor='meleeDef'>Melee</label>
      </div>

      <div>
        <h3>Encumbrance</h3>
        <input
          id='encumThres'
          type='number'
          value={encumThreshold}
          onChange={e =>
            setCharacterForm({
              ...characterForm,
              encumThreshold: parseInt(e.target.value),
            })
          }
        />
        <label htmlFor='encumThres'>Threshold</label>
        <input
          id='encumCurrent'
          type='number'
          value={encumCurrent}
          onChange={e =>
            setCharacterForm({
              ...characterForm,
              encumCurrent: parseInt(e.target.value),
            })
          }
        />
        <label htmlFor='encumCurrent'>Current</label>
      </div>

      <div>
        <h3>Force Pool</h3>
        <input
          type='number'
          value={forcePool}
          onChange={e =>
            setCharacterForm({
              ...characterForm,
              forcePool: parseInt(e.target.value),
            })
          }
        />
      </div>
    </div>
  )
}
