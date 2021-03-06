import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import InventoryItem from './inventoryComponents/InventoryItem'

export default function InventoryItems({
  setCharacterForm,
  characterForm: { inventory },
  characterForm,
}) {
  const allInventoryItems = inventory.map((item, idx) => {
    const { _id } = item
    return (
      <InventoryItem
        key={_id}
        item={item}
        inventory={inventory}
        setCharacterForm={setCharacterForm}
        characterForm={characterForm}
        inventoryIdx={idx}
      />
    )
  })

  const initialInventoryItemForm = {
    itemName: '',
    cost: 0,
    encumbrance: 0,
    description: '',
  }

  const addInventoryItem = () => {
    inventory.push(initialInventoryItemForm)
    setCharacterForm({ ...characterForm, inventory })
  }

  return (
    <div>
      <div className='text-center text-white sm:text-xl text-sm font-extrabold grid grid-cols-4 bg-gray-800 rounded-md'>
        <span>Item</span>
        <span>Cost</span>
        <span>Encum</span>
        <span>Description</span>
      </div>
      {allInventoryItems}
      <button className='flex' onClick={addInventoryItem}>
        <span className='material-symbols-outlined text-gray-800 hover:text-red-800'>
          add
        </span>
        <span className='text-gray-800 hover:text-red-800'>Add</span>
      </button>
    </div>
  )
}
