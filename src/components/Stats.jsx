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
    <div className='bg-red-700 text-center'>
      <h2 className='text-2xl text-gray-800 font-extrabold starjedi'>Stats</h2>
      <div className='flex flex-wrap justify-center bg-red-700 px-5 py-3 space-x-7 space-between'>
        <div className='px-5 py-3 space-x-1.5'>
          <h3 className='text-gray-800 text-xl font-bold starjedi'>Wounds</h3>
          <Input
            className='w-20 text-center'
            label='Threshold'
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
            className='w-20 text-center'
            label='Current'
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

        <div className='px-5 py-3 space-x-1.5'>
          <h3 className='text-gray-800 text-xl font-bold starjedi'>Strain</h3>
          <Input
            className='w-20 text-center'
            label='Threshold'
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
            className='w-20 text-center'
            label='Current'
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

        <div className='px-5 py-3 space-x-1.5'>
          <h3 className='text-gray-800 text-xl font-bold starjedi'>Defense</h3>
          <Input
            className='w-20 text-center'
            label='Ranged'
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
            className='w-20 text-center'
            label='Melee'
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

        <div className='px-5 py-3 space-x-1.5'>
          <h3 className='text-gray-800 text-xl font-bold starjedi'>
            Encumbrance
          </h3>
          <Input
            className='w-20 text-center'
            label='Threshold'
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
            className='w-20 text-center'
            label='Current'
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

        <div className='px-5 py-3 space-x-1.5'>
          <h3 className='text-gray-800 text-xl font-bold starjedi'>Soak</h3>
          <Input
            className='w-20 text-center'
            label='Value'
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

        <div className='px-5 py-3 space-x-1.5'>
          <h3 className='text-gray-800 text-xl font-bold starjedi'>
            Force Pool
          </h3>
          <Input
            className='w-20 text-center'
            label='Value'
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
    </div>
  )
}
