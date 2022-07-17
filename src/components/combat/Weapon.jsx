import React from 'react'

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
  },
  setCharacterForm,
  characterForm,
  idx,
}) {
  // initialWeaponForm = {
  //   weaponName: '',
  //   usesSkill: '',
  //   damage: 0,
  //   range: '',
  //   encumbrance: 0,
  //   hardPoints: 0,
  //   critRating: 0,
  //   condition: 'New',
  //   restricted: 'No',
  //   qualities: '',
  //   modifiers: '',
  //   rarity: 0,
  // }

  // const [weaponForm, setWeaponForm] = useState(weapon)

  const updateWeapon = (e, idx) => {
    console.log('toggled')
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

  return (
    <React.Fragment>
      <label htmlFor='weaponName'>Weapon Name</label>
      <input
        id='weaponName'
        type='text'
        name='weaponName'
        value={weaponName}
        onChange={e => updateWeapon(e, idx)}
      />
      <label htmlFor='usesSkill'>Uses Skill</label>
      <input
        id='usesSkill'
        type='text'
        name='usesSkill'
        value={usesSkill}
        onChange={e => updateWeapon(e, idx)}
      />
      <label htmlFor='damage'>Damage</label>
      <input
        id='damage'
        type='number'
        name='damage'
        value={damage}
        onChange={e => updateWeapon(e, idx)}
      />
      <label htmlFor='range'>Range</label>
      <input
        id='range'
        type='text'
        name='range'
        value={range}
        onChange={e => updateWeapon(e, idx)}
      />
      <label htmlFor='encumbrance'>Encumbrance</label>
      <input
        id='encumbrance'
        type='number'
        name='encumbrance'
        value={encumbrance}
        onChange={e => updateWeapon(e, idx)}
      />
      <label htmlFor='hardPoints'>Hard Points</label>
      <input
        id='hardPoints'
        type='number'
        name='hardPoints'
        value={hardPoints}
        onChange={e => updateWeapon(e, idx)}
      />
      <label htmlFor='critRating'>Crit Rating</label>
      <input
        id='critRating'
        type='number'
        name='critRating'
        value={critRating}
        onChange={e => updateWeapon(e, idx)}
      />
      <label htmlFor='condition'>Condition</label>
      <input
        id='condition'
        type='text'
        name='condition'
        value={condition}
        onChange={e => updateWeapon(e, idx)}
      />
      <label htmlFor='restricted'>Restricted</label>
      <input
        id='restricted'
        type='checkbox'
        name='restricted'
        onChange={e => restrictedCheck(e, idx)}
        checked={restricted}
      />
      <label htmlFor='qualities'>Qualities</label>
      <input
        id='qualities'
        type='text'
        name='qualities'
        value={qualities}
        onChange={e => updateWeapon(e, idx)}
      />
      <label htmlFor='modifiers'>Modifiers</label>
      <input
        id='modifiers'
        type='text'
        name='modifiers'
        value={modifiers}
        onChange={e => updateWeapon(e, idx)}
      />
      <label htmlFor='rarity'>Rarity</label>
      <input
        id='rarity'
        type='number'
        name='rarity'
        value={rarity}
        onChange={e => updateWeapon(e, idx)}
      />
    </React.Fragment>
  )
}
