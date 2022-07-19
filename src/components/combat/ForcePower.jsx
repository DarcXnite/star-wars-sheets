import React from 'react'
import ForcePowerUpgrade from './ForcePowerUpgrade'
import Input from '../ui/Input'

export default function ForcePower({
  power: { powerName, modifiers, xpCost, summary, upgrades },
  power,
  setCharacterForm,
  characterForm,
  characterForm: { forcePowers },
  powerIndex,
}) {
  const allUpgrades = upgrades.map((upg, idx) => {
    return (
      <details open={true}>
        <summary>Upgrade</summary>
        <ForcePowerUpgrade
          key={upg._id}
          characterForm={characterForm}
          setCharacterForm={setCharacterForm}
          idx={idx}
          powerIndex={powerIndex}
          upg={upg}
          power={power}
        />
      </details>
    )
  })

  const updatePower = (e, idx) => {
    const updatedPowers = characterForm.forcePowers.map((power, i) => {
      if (idx === i) {
        return { ...power, [e.target.name]: e.target.value }
      } else {
        return power
      }
    })
    setCharacterForm({ ...characterForm, forcePowers: updatedPowers })
  }

  const initialUpgForm = {
    type: '',
    rank: 0,
    xpCost: 0,
    description: '',
  }

  const addUpgrade = () => {
    upgrades.push(initialUpgForm)
    setCharacterForm({ ...characterForm, forcePowers })
  }

  const removePower = () => {
    const updatedPowers = forcePowers.filter((pow, i) => i !== powerIndex)
    setCharacterForm({ ...characterForm, forcePowers: updatedPowers })
  }

  return (
    <React.Fragment>
      <div className='grid grid-cols-5 px-5 py-3 space-x-1.5 bg-gray-800 m-5 rounded-md h-12'>
        <Input
          className='w-20 h-5'
          type='text'
          name='powerName'
          value={powerName}
          onChange={e => updatePower(e, powerIndex)}
        />
        <Input
          className='w-20 h-5'
          type='text'
          name='modifiers'
          value={modifiers}
          onChange={e => updatePower(e, powerIndex)}
        />
        <Input
          className='w-20 h-5'
          type='number'
          name='xpCost'
          value={xpCost}
          onChange={e => updatePower(e, powerIndex)}
          min='0'
        />
        <Input
          className='w-20 h-5'
          type='text'
          name='summary'
          value={summary}
          onChange={e => updatePower(e, powerIndex)}
        />
        <button onClick={removePower}>
          <span className='material-symbols-outlined'>delete</span>
        </button>
      </div>
      {allUpgrades}
      <button onClick={addUpgrade}>
        <span className='material-symbols-outlined'>add</span>
      </button>
    </React.Fragment>
  )
}
