import React from 'react'
import ArmorAttachment from './ArmorAttachment'
import Input from '../../ui/Input'

export default function Armor({
  armor: { name, condition, value, qualities, features, rarity, attachments },
  setCharacterForm,
  characterForm,
  characterForm: { armors },
  armor,
  armorIndex,
}) {
  const updateArmor = (e, idx) => {
    const updatedArmor = characterForm.armors.map((armor, i) => {
      if (idx === i) {
        return { ...armor, [e.target.name]: e.target.value }
      } else {
        return armor
      }
    })
    setCharacterForm({ ...characterForm, armors: updatedArmor })
  }

  const deleteArmor = () => {
    const updatedArmor = armors.filter((arm, i) => i !== armorIndex)
    setCharacterForm({ ...characterForm, armors: updatedArmor })
  }

  const allArmorAttachments = attachments.map((attachment, idx) => {
    return (
      <details open={true}>
        <summary>Attachment</summary>
        <ArmorAttachment
          key={attachment._id}
          characterForm={characterForm}
          setCharacterForm={setCharacterForm}
          idx={idx}
          armorIndex={armorIndex}
          armorAttachment={attachment}
          armor={armor}
        />
      </details>
    )
  })

  const armorAttachmentForm = {
    attachmentName: '',
    hardPoints: 0,
    description: '',
  }

  const addArmorAttachments = () => {
    attachments.push(armorAttachmentForm)
    setCharacterForm({ ...characterForm, armors })
  }

  return (
    <React.Fragment>
      <Input
        label='Name:'
        id='name'
        type='text'
        name='name'
        value={name}
        onChange={e => updateArmor(e, armorIndex)}
      />
      <Input
        label='Condition:'
        id='condition'
        type='text'
        name='condition'
        value={condition}
        onChange={e => updateArmor(e, armorIndex)}
      />
      <Input
        label='Value:'
        id='value'
        type='number'
        name='value'
        value={value}
        onChange={e => updateArmor(e, armorIndex)}
        min='0'
      />
      <Input
        label='Qualities:'
        id='qualities'
        type='text'
        name='qualities'
        value={qualities}
        onChange={e => updateArmor(e, armorIndex)}
      />
      <Input
        label='Features:'
        id='features'
        type='text'
        name='features'
        value={features}
        onChange={e => updateArmor(e, armorIndex)}
      />
      <Input
        label='Rarity:'
        id='rarity'
        type='number'
        name='rarity'
        value={rarity}
        onChange={e => updateArmor(e, armorIndex)}
        min='0'
      />
      {allArmorAttachments}
      <button onClick={deleteArmor}>
        <span className='material-symbols-outlined'>delete</span>
      </button>
      <button onClick={addArmorAttachments}>Add Attachment</button>
    </React.Fragment>
  )
}
