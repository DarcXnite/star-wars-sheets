import React from 'react'
import Input from '../ui/Input'

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
    // console.log(filteredAttachments)
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
      <div className='grid grid-cols-4 px-5 py-3 space-x-1.5 bg-gray-800 m-5 rounded-md h-12'>
        <Input
          className='w-20 h-5'
          id='attachment'
          type='text'
          name='attachment'
          value={attachment}
          onChange={e => updateAttachments(e, idx)}
        />

        <Input
          className='w-20 h-5'
          id='hardPoint'
          type='number'
          name='hardPointCost'
          value={hardPointCost}
          onChange={e => updateAttachments(e, idx)}
        />

        <Input
          className='w-20 h-5'
          id='modifications'
          type='text'
          name='modifications'
          value={modifications}
          onChange={e => updateAttachments(e, idx)}
        />
        <div className='flex items-center justify-between'>
          <div> </div>
          <Input
            className='w-20 h-5'
            id='rarity'
            type='number'
            name='rarity'
            value={rarity}
            onChange={e => updateAttachments(e, idx)}
          />
          <button
            className='ml-5 text-white hover:text-red-700 hover:bg-gray-200 rounded flex mb-3'
            onClick={removeAttachment}
          >
            <span className='material-symbols-outlined'>delete</span>
          </button>
        </div>
      </div>
    </React.Fragment>
  )
}
