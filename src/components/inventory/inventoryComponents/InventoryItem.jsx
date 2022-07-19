import React from 'react'
import Input from '../../ui/Input'

export default function InventoryItem({
  item: { itemName, cost, encumbrance, description },
  inventory,
  setCharacterForm,
  characterForm,
  inventoryIdx,
}) {
  const updateInventoryItem = (e, idx) => {
    console.log('toggled')
    const updatedInventoryItems = characterForm.inventory.map((item, i) => {
      if (idx === i) {
        return { ...item, [e.target.name]: e.target.value }
      } else {
        return item
      }
    })
    setCharacterForm({ ...characterForm, inventory: updatedInventoryItems })
  }

  const deleteInventoryItem = () => {
    const updatedInventoryItems = inventory.filter(
      (invItem, i) => i !== inventoryIdx
    )
    setCharacterForm({ ...characterForm, inventory: updatedInventoryItems })
  }

  return (
    <React.Fragment>
      <div className='grid grid-cols-5 px-10 py-3 space-x-1.5 bg-gray-800 m-5 rounded-md h-12'>
        <Input
          className='w-22 h-5'
          id='itemName'
          type='text'
          name='itemName'
          value={itemName}
          onChange={e => updateInventoryItem(e, inventoryIdx)}
        />
        <Input
          className='w-20 h-5'
          id='cost'
          type='number'
          name='cost'
          value={cost}
          onChange={e => updateInventoryItem(e, inventoryIdx)}
          min='0'
        />
        <Input
          className='w-20 h-5'
          id='encumbrance'
          type='number'
          name='encumbrance'
          value={encumbrance}
          onChange={e => updateInventoryItem(e, inventoryIdx)}
          min='0'
        />
        <Input
          className='w-30 h-5'
          id='description'
          type='text'
          name='description'
          value={description}
          onChange={e => updateInventoryItem(e, inventoryIdx)}
        />
        <button onClick={deleteInventoryItem}>
          <span className='material-symbols-outlined'>delete</span>
        </button>
      </div>
    </React.Fragment>
  )
}
