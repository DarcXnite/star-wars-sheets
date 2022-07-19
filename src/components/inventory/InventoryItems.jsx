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
      <div className='text-center text-white text-xl font-extrabold grid grid-cols-5 bg-gray-800 rounded-md'>
        <span>Item</span>
        <span>Cost</span>
        <span>Encumbrance</span>
        <span>Description</span>
      </div>
      {allInventoryItems}
      <button onClick={addInventoryItem}>
        <span className='material-symbols-outlined'>add</span>
      </button>
    </div>
  )
}
