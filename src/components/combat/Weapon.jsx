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
        <summary>Attachment</summary>
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
        label='Damage:'
        id='damage'
        type='number'
        name='damage'
        value={damage}
        onChange={e => updateWeapon(e, weaponIndex)}
        min='0'
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
        label='Encumbrance:'
        id='encumbrance'
        type='number'
        name='encumbrance'
        value={encumbrance}
        onChange={e => updateWeapon(e, weaponIndex)}
        min='0'
      />
      <Input
        label='Hard Points:'
        id='hardPoints'
        type='number'
        name='hardPoints'
        value={hardPoints}
        onChange={e => updateWeapon(e, weaponIndex)}
        min='0'
      />
      <Input
        label='Crit Rating:'
        id='critRating'
        type='number'
        name='critRating'
        value={critRating}
        onChange={e => updateWeapon(e, weaponIndex)}
        min='0'
      />
      <Input
        label='Condition:'
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
        id='rarity'
        type='number'
        name='rarity'
        value={rarity}
        onChange={e => updateWeapon(e, weaponIndex)}
        min='0'
      />
      {allWeaponAttachments}

      <button onClick={addAttachment}>Add Attachment</button>
      <button onClick={deleteWeapon}>
        <span className='material-symbols-outlined'>delete</span>
      </button>
    </React.Fragment>
  )
}
