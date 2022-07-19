import React from 'react'
import Input from '../../ui/Input'

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
      <div className='text-center text-white sm:text-xl text-sm font-extrabold grid grid-cols-3 bg-gray-800 rounded-md'>
        <span>Name</span>
        <span>Hard Points</span>
        <span>Description</span>
      </div>
      <div className='sm:grid grid-cols-3 px-5 sm:py-3 pb-28 pt-3 space-x-1.5 bg-gray-800 m-5 rounded-md h-12'>
        <Input
          className='w-25 h-5'
          id='attachmentName'
          type='text'
          name='attachmentName'
          value={attachmentName}
          onChange={e => updateAttachments(e, idx)}
        />

        <Input
          className='w-20 h-5'
          id='hardPoints'
          type='number'
          name='hardPoints'
          value={hardPoints}
          onChange={e => updateAttachments(e, idx)}
          min='0'
        />
        <div className='flex items-center justify-between'>
          <div> </div>
          <Input
            className='w-25 h-5'
            id='description'
            type='text'
            name='description'
            value={description}
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
