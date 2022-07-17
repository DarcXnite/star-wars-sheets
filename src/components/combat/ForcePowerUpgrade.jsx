import React from 'react'

export default function ForcePowerUpgrade({
  upg: { type, rank, xpCost, description },
  upg,
  power,
  setCharacterForm,
  characterForm,
  characterForm: { forcePowers },
  powerIndex,
  idx,
}) {
  const updateUpgrade = (e, idx) => {
    console.log('attachments updated')

    let tempPower = power

    const updatedUpgrades = power.upgrades.map((upgrade, i) => {
      if (idx === i) {
        return { ...upgrade, [e.target.name]: e.target.value }
      } else {
        return upgrade
      }
    })

    tempPower.upgrades = updatedUpgrades

    const updatedForcePowers = forcePowers.map((pow, i) => {
      if (powerIndex === i) {
        return tempPower
      } else {
        return pow
      }
    })

    setCharacterForm({ ...characterForm, forcePowers: updatedForcePowers })
  }

  const removeUpgrade = () => {
    console.log('upgrade removed')
    let tempPower = power
    const filteredUpgrades = power.upgrades.filter((upg, i) => i !== idx)
    // console.log(filteredAttachments)
    tempPower.upgrades = filteredUpgrades

    const updatedForcePowers = forcePowers.map((pow, i) => {
      if (powerIndex === i) {
        return tempPower
      } else {
        return pow
      }
    })
    // console.log(updatedWeapons)
    setCharacterForm({ ...characterForm, forcePowers: updatedForcePowers })
  }

  return (
    <React.Fragment>
      <label htmlFor='type'>Type</label>
      <input
        id='type'
        type='text'
        name='type'
        value={type}
        onChange={e => updateUpgrade(e, idx)}
      />
      <label htmlFor='rank'>Rank</label>
      <input
        id='rank'
        type='number'
        name='rank'
        value={rank}
        onChange={e => updateUpgrade(e, idx)}
        min='0'
      />
      <label htmlFor='xpCost'>XP Cost</label>
      <input
        id='xpCost'
        type='number'
        name='xpCost'
        value={xpCost}
        onChange={e => updateUpgrade(e, idx)}
        min='0'
      />
      <label htmlFor='description'>Description</label>
      <input
        id='description'
        type='text'
        name='description'
        value={description}
        onChange={e => updateUpgrade(e, idx)}
      />
      <button onClick={removeUpgrade}>Remove Upgrade</button>
    </React.Fragment>
  )
}
