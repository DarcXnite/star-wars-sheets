import React from 'react'
import ArmorAttachments from './ArmorAttachments'

export default function Armor({
  armor: { name, condition, value, qualities, features, rarity },
  setCharacterForm,
  characterForm,
  idx,
}) {
  const updateArmor = (e, idx) => {
    console.log('toggled')
    const updatedArmor = characterForm.armors.map((armor, i) => {
      if (idx === i) {
        return { ...armor, [e.target.name]: e.target.value }
      } else {
        return armor
      }
    })
    setCharacterForm({ ...characterForm, armors: updatedArmor })
  }
  return (
    <React.Fragment>
      <label htmlFor='name'>Name</label>
      <input
        id='name'
        type='text'
        name='name'
        value={name}
        onChange={e => updateArmor(e, idx)}
      />
      <label htmlFor='condition'>Condition</label>
      <input
        id='condition'
        type='text'
        name='condition'
        value={condition}
        onChange={e => updateArmor(e, idx)}
      />
      <label htmlFor='value'>Value</label>
      <input
        id='value'
        type='number'
        name='value'
        value={value}
        onChange={e => updateArmor(e, idx)}
      />
      <label htmlFor='qualities'>Qualities</label>
      <input
        id='qualities'
        type='text'
        name='qualities'
        value={qualities}
        onChange={e => updateArmor(e, idx)}
      />
      <label htmlFor='features'>Features</label>
      <input
        id='features'
        type='text'
        name='features'
        value={features}
        onChange={e => updateArmor(e, idx)}
      />
      <label htmlFor='rarity'>Rarity</label>
      <input
        id='rarity'
        type='number'
        name='rarity'
        value={rarity}
        onChange={e => updateArmor(e, idx)}
      />
    </React.Fragment>
  )
}
