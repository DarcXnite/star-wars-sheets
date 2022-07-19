import React from 'react'
import WeaponAttachment from './WeaponAttachment'
import Input from '../ui/Input'

export default function Weapons({
  weapon: {
    weaponName,
    usesSkill,
    damage,
    range,
    encumbrance,
    hardPoints,
    critRating,
    condition,
    restricted,
    qualities,
    modifiers,
    rarity,
    attachments,
  },
  weapon,
  setCharacterForm,
  characterForm,
  characterForm: { weapons },
  weaponIndex,
}) {
  const updateWeapon = (e, idx) => {
    const updatedWeapons = characterForm.weapons.map((weapon, i) => {
      if (idx === i) {
        return { ...weapon, [e.target.name]: e.target.value }
      } else {
        return weapon
      }
    })
    setCharacterForm({ ...characterForm, weapons: updatedWeapons })
  }

  const restrictedCheck = (e, idx) => {
    const updatedWeapons = characterForm.weapons.map((weapon, i) => {
      if (idx === i) {
        return { ...weapon, [e.target.name]: !restricted }
      } else {
        return weapon
      }
    })
    setCharacterForm({ ...characterForm, weapons: updatedWeapons })
  }

  const allWeaponAttachments = attachments.map((attachment, idx) => {
    return (
      <details open={true}>
        <summary className='text-gray-800 text-xl font-bold'>
          Attachment
        </summary>
        <WeaponAttachment
          key={attachment._id}
          characterForm={characterForm}
          setCharacterForm={setCharacterForm}
          idx={idx}
          weaponIndex={weaponIndex}
          weaponAttachment={attachment}
          weapon={weapon}
        />
      </details>
    )
  })

  const weaponAttachmentForm = {
    attachment: '',
    hardPointCost: 0,
    modifications: '',
    rarity: 0,
  }

  const addAttachment = () => {
    attachments.push(weaponAttachmentForm)
    setCharacterForm({ ...characterForm, weapons })
  }

  const deleteWeapon = () => {
    const updatedWeapons = weapons.filter((weap, i) => i !== weaponIndex)
    setCharacterForm({ ...characterForm, weapons: updatedWeapons })
  }

  return (
    <React.Fragment>
      <div>
        <div className='sm:grid grid-cols-4 px-5 py-3 space-x-1.5 m-5'>
          <div className='bg-gray-800 rounded-md sm:m-2 ml-2'>
            <Input
              label='Damage'
              className='w-20 h-10 text-center mb-3'
              id='damage'
              type='number'
              name='damage'
              value={damage}
              onChange={e => updateWeapon(e, weaponIndex)}
              min='0'
            />
          </div>
          <div className='bg-gray-800 rounded-md m-2'>
            <Input
              label='Critical'
              className='w-20 h-10 text-center mb-3'
              id='critRating'
              type='number'
              name='critRating'
              value={critRating}
              onChange={e => updateWeapon(e, weaponIndex)}
              min='0'
            />
          </div>
          <div className='bg-gray-800 rounded-md m-2'>
            <Input
              label='Encum'
              className='w-20 h-10 text-center mb-3'
              id='encumbrance'
              type='number'
              name='encumbrance'
              value={encumbrance}
              onChange={e => updateWeapon(e, weaponIndex)}
              min='0'
            />
          </div>
          <div className='bg-gray-800 rounded-md m-2'>
            <Input
              label='HP'
              className='w-20 h-10 text-center mb-3'
              id='hardPoints'
              type='number'
              name='hardPoints'
              value={hardPoints}
              onChange={e => updateWeapon(e, weaponIndex)}
              min='0'
            />
          </div>
        </div>
        <div className='sm:grid grid-cols-2 px-5 py-3 space-x-1.5 bg-gray-800 m-5 rounded-md h-50'>
          <Input
            label='Weapon Name:'
            id='weaponName'
            type='text'
            name='weaponName'
            value={weaponName}
            onChange={e => updateWeapon(e, weaponIndex)}
          />
          <Input
            label='Uses Skill:'
            id='usesSkill'
            type='text'
            name='usesSkill'
            value={usesSkill}
            onChange={e => updateWeapon(e, weaponIndex)}
          />
          <Input
            label='Range:'
            id='range'
            type='text'
            name='range'
            value={range}
            onChange={e => updateWeapon(e, weaponIndex)}
          />
          <Input
            label='Condition:'
            className='w-20 h-10 text-center'
            id='condition'
            type='text'
            name='condition'
            value={condition}
            onChange={e => updateWeapon(e, weaponIndex)}
          />
          <Input
            label='Restricted?'
            id='restricted'
            type='checkbox'
            name='restricted'
            onChange={e => restrictedCheck(e, weaponIndex)}
            checked={restricted}
          />
          <Input
            label='Qualities:'
            id='qualities'
            type='text'
            name='qualities'
            value={qualities}
            onChange={e => updateWeapon(e, weaponIndex)}
          />
          <Input
            label='Modifiers:'
            id='modifiers'
            type='text'
            name='modifiers'
            value={modifiers}
            onChange={e => updateWeapon(e, weaponIndex)}
          />
          <Input
            label='Rarity:'
            className='w-20 text-center'
            id='rarity'
            type='number'
            name='rarity'
            value={rarity}
            onChange={e => updateWeapon(e, weaponIndex)}
            min='0'
          />
          <div className='col-span-2 mt-4'>
            <div className='flex justify-between'>
              <button
                className='ml-5 text-white hover:text-red-700 hover:bg-gray-200 rounded flex mb-3 place-items-start p-1'
                onClick={addAttachment}
              >
                Add Attachment
              </button>
              <button
                className='ml-5 text-white hover:text-red-700 hover:bg-gray-200 rounded flex mb-3 w-6 place-items-end'
                onClick={deleteWeapon}
              >
                <span className='material-symbols-outlined'>delete</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className='text-center text-white sm:text-xl text-xs font-extrabold grid grid-cols-4 bg-gray-800 rounded-md sm:visible invisible'>
          <span>Attachment</span>
          <span>Hard Point</span>
          <span>Modifications</span>
          <span>Rarity</span>
        </div>
        {allWeaponAttachments}
      </div>
    </React.Fragment>
  )
}
