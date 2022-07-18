import React from 'react'
import Input from './ui/Input'

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

      <div className='flex flex-wrap px-5 py-3 space-x-1.5'>
        <h2>Wounds</h2>
        <Input
          label='Threshold:'
          id='woundsThres'
          type='number'
          value={woundsThreshold}
          onChange={e =>
            setCharacterForm({
              ...characterForm,
              woundsThreshold: parseInt(e.target.value),
            })
          }
          min='0'
        />
        <Input
          label='Current:'
          id='currentWounds'
          type='number'
          value={wounds}
          onChange={e =>
            setCharacterForm({
              ...characterForm,
              wounds: parseInt(e.target.value),
            })
          }
          min='0'
        />
      </div>

      <div className='flex flex-wrap px-5 py-3 space-x-1.5'>
        <h3>Strain</h3>
        <Input
          label='Threshold:'
          id='strainThres'
          type='number'
          value={strainThreshold}
          onChange={e =>
            setCharacterForm({
              ...characterForm,
              strainThreshold: parseInt(e.target.value),
            })
          }
          min='0'
        />
        <Input
          label='Current:'
          id='currentStrain'
          type='number'
          value={strain}
          onChange={e =>
            setCharacterForm({
              ...characterForm,
              strain: parseInt(e.target.value),
            })
          }
          min='0'
        />
      </div>

      <div className='flex flex-wrap px-5 py-3 space-x-1.5'>
        <h3>Soak</h3>
        <Input
          label='Value:'
          type='number'
          value={soakValue}
          onChange={e =>
            setCharacterForm({
              ...characterForm,
              soakValue: parseInt(e.target.value),
            })
          }
          min='0'
        />
      </div>

      <div className='flex flex-wrap px-5 py-3 space-x-1.5'>
        <h3>Defense</h3>
        <Input
          label='Ranged:'
          id='rangedDef'
          type='number'
          value={rangedDef}
          onChange={e =>
            setCharacterForm({
              ...characterForm,
              rangedDef: parseInt(e.target.value),
            })
          }
          min='0'
        />
        <Input
          label='Melee:'
          id='meleeDef'
          type='number'
          value={meleeDef}
          onChange={e =>
            setCharacterForm({
              ...characterForm,
              meleeDef: parseInt(e.target.value),
            })
          }
          min='0'
        />
      </div>

      <div className='flex flex-wrap px-5 py-3 space-x-1.5'>
        <h3>Encumbrance</h3>
        <Input
          label='Encumbrance:'
          id='encumThres'
          type='number'
          value={encumThreshold}
          onChange={e =>
            setCharacterForm({
              ...characterForm,
              encumThreshold: parseInt(e.target.value),
            })
          }
          min='0'
        />
        <Input
          label='Current:'
          id='encumCurrent'
          type='number'
          value={encumCurrent}
          onChange={e =>
            setCharacterForm({
              ...characterForm,
              encumCurrent: parseInt(e.target.value),
            })
          }
          min='0'
        />
      </div>

      <div className='flex flex-wrap px-5 py-3 space-x-1.5'>
        <h3>Force Pool</h3>
        <Input
          label='Value:'
          type='number'
          value={forcePool}
          onChange={e =>
            setCharacterForm({
              ...characterForm,
              forcePool: parseInt(e.target.value),
            })
          }
          min='0'
        />
      </div>
    </div>
  )
}
