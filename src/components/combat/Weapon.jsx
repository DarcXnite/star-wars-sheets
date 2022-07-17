import React from 'react'
import WeaponAttachment from './WeaponAttachment'

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
      <label htmlFor='weaponName'>Weapon Name</label>
      <input
        id='weaponName'
        type='text'
        name='weaponName'
        value={weaponName}
        onChange={e => updateWeapon(e, weaponIndex)}
      />
      <label htmlFor='usesSkill'>Uses Skill</label>
      <input
        id='usesSkill'
        type='text'
        name='usesSkill'
        value={usesSkill}
        onChange={e => updateWeapon(e, weaponIndex)}
      />
      <label htmlFor='damage'>Damage</label>
      <input
        id='damage'
        type='number'
        name='damage'
        value={damage}
        onChange={e => updateWeapon(e, weaponIndex)}
      />
      <label htmlFor='range'>Range</label>
      <input
        id='range'
        type='text'
        name='range'
        value={range}
        onChange={e => updateWeapon(e, weaponIndex)}
      />
      <label htmlFor='encumbrance'>Encumbrance</label>
      <input
        id='encumbrance'
        type='number'
        name='encumbrance'
        value={encumbrance}
        onChange={e => updateWeapon(e, weaponIndex)}
      />
      <label htmlFor='hardPoints'>Hard Points</label>
      <input
        id='hardPoints'
        type='number'
        name='hardPoints'
        value={hardPoints}
        onChange={e => updateWeapon(e, weaponIndex)}
      />
      <label htmlFor='critRating'>Crit Rating</label>
      <input
        id='critRating'
        type='number'
        name='critRating'
        value={critRating}
        onChange={e => updateWeapon(e, weaponIndex)}
      />
      <label htmlFor='condition'>Condition</label>
      <input
        id='condition'
        type='text'
        name='condition'
        value={condition}
        onChange={e => updateWeapon(e, weaponIndex)}
      />
      <label htmlFor='restricted'>Restricted?</label>
      <input
        id='restricted'
        type='checkbox'
        name='restricted'
        onChange={e => restrictedCheck(e, weaponIndex)}
        checked={restricted}
      />
      <label htmlFor='qualities'>Qualities</label>
      <input
        id='qualities'
        type='text'
        name='qualities'
        value={qualities}
        onChange={e => updateWeapon(e, weaponIndex)}
      />
      <label htmlFor='modifiers'>Modifiers</label>
      <input
        id='modifiers'
        type='text'
        name='modifiers'
        value={modifiers}
        onChange={e => updateWeapon(e, weaponIndex)}
      />
      <label htmlFor='rarity'>Rarity</label>
      <input
        id='rarity'
        type='number'
        name='rarity'
        value={rarity}
        onChange={e => updateWeapon(e, weaponIndex)}
      />
      {allWeaponAttachments}

      <button onClick={addAttachment}>Add Attachment</button>
      <button onClick={deleteWeapon}>Delete Weapon</button>
    </React.Fragment>
  )
}
