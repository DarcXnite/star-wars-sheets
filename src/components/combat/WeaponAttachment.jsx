import React from 'react'

export default function WeaponAttachment({
  weaponAttachment: { attachment, hardPointCost, modifications, rarity },
  weapon,
  setCharacterForm,
  characterForm: { weapons },
  characterForm,
  idx,
  weaponIndex,
}) {
  const updateAttachments = (e, idx) => {
    console.log('attachments updated')
    // first set a temp obj
    let tempWeapon = weapon

    // update the attachments via matching index
    const updatedAttachments = weapon.attachments.map((weaponAttachment, i) => {
      if (idx === i) {
        return { ...weaponAttachment, [e.target.name]: e.target.value }
      } else {
        return weaponAttachment
      }
    })

    // set the temp weapon obj with the new updated attachments array
    tempWeapon.attachments = updatedAttachments
    // console.log(tempWeapon)
    // map through the weapons (NOT WEAPON) array and find the matching weaponIndex and replace that object with the temp weapon obj
    const updatedWeapons = weapons.map((weap, i) => {
      if (weaponIndex === i) {
        return tempWeapon
      } else {
        return weap
      }
    })
    // console.log(updatedWeapons)
    setCharacterForm({ ...characterForm, weapons: updatedWeapons })
  }

  const removeAttachment = () => {
    console.log('attachment removed')
    let tempWeapon = weapon
    const filteredAttachments = weapon.attachments.filter(
      (attach, i) => i !== idx
    )
    console.log(filteredAttachments)
    tempWeapon.attachments = filteredAttachments
    // map through the weapons (NOT WEAPON) array and find the matching weaponIndex and replace that object with the temp weapon obj
    const updatedWeapons = weapons.map((weap, i) => {
      if (weaponIndex === i) {
        return tempWeapon
      } else {
        return weap
      }
    })
    // console.log(updatedWeapons)
    setCharacterForm({ ...characterForm, weapons: updatedWeapons })
  }

  return (
    <React.Fragment>
      <label htmlFor='attachment'>Attachment</label>
      <input
        id='attachment'
        type='text'
        name='attachment'
        value={attachment}
        onChange={e => updateAttachments(e, idx)}
      />

      <label htmlFor='hardPoint'>Hard Points</label>
      <input
        id='hardPoint'
        type='number'
        name='hardPointCost'
        value={hardPointCost}
        onChange={e => updateAttachments(e, idx)}
      />

      <label htmlFor='modifications'>Modifications</label>
      <input
        id='modifications'
        type='text'
        name='modifications'
        value={modifications}
        onChange={e => updateAttachments(e, idx)}
      />

      <label htmlFor='rarity'>Rarity</label>
      <input
        id='rarity'
        type='number'
        name='rarity'
        value={rarity}
        onChange={e => updateAttachments(e, idx)}
      />
      <button onClick={removeAttachment}>Remove Attachment</button>
    </React.Fragment>
  )
}
