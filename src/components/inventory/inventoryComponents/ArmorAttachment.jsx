import React from 'react'

export default function ArmorAttachments({
  armorAttachment: { attachmentName, hardPoints, description },
  armor,
  setCharacterForm,
  characterForm: { armors },
  characterForm,
  idx,
  armorIndex,
}) {
  const updateAttachments = (e, idx) => {
    console.log('attachments updated')
    // first set a temp obj
    let tempArmor = armor

    // update the attachments via matching index
    const updatedAttachments = armor.attachments.map((armorAttachment, i) => {
      if (idx === i) {
        return { ...armorAttachment, [e.target.name]: e.target.value }
      } else {
        return armorAttachment
      }
    })

    // set the temp armor obj with the new updated attachments array
    tempArmor.attachments = updatedAttachments
    // console.log(tempArmor)
    // map through the armors (NOT armor) array and find the matching armorIndex and replace that object with the temp armor obj
    const updatedArmors = armors.map((arm, i) => {
      if (armorIndex === i) {
        return tempArmor
      } else {
        return arm
      }
    })
    // console.log(updatedWeapons)
    setCharacterForm({ ...characterForm, armors: updatedArmors })
  }

  const removeAttachment = () => {
    console.log('attachment removed')
    let tempArmor = armor
    const filteredAttachments = armor.attachments.filter(
      (attach, i) => i !== idx
    )
    tempArmor.attachments = filteredAttachments
    // map through the weapons (NOT WEAPON) array and find the matching weaponIndex and replace that object with the temp weapon obj
    const updatedArmors = armors.map((arm, i) => {
      if (armorIndex === i) {
        return tempArmor
      } else {
        return arm
      }
    })
    // console.log(updatedWeapons)
    setCharacterForm({ ...characterForm, armors: updatedArmors })
  }

  return (
    <React.Fragment>
      <label htmlFor='attachmentName'>Attachment</label>
      <input
        id='attachmentName'
        type='text'
        name='attachmentName'
        value={attachmentName}
        onChange={e => updateAttachments(e, idx)}
      />

      <label htmlFor='hardPoints'>Hard Points</label>
      <input
        id='hardPoints'
        type='number'
        name='hardPoints'
        value={hardPoints}
        onChange={e => updateAttachments(e, idx)}
      />

      <label htmlFor='description'>Description</label>
      <input
        id='description'
        type='text'
        name='description'
        value={description}
        onChange={e => updateAttachments(e, idx)}
      />

      <button onClick={removeAttachment}>Remove Attachment</button>
    </React.Fragment>
  )
}
