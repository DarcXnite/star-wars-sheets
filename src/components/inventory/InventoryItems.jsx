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
      <details>
        <summary>Inventory Items</summary>
        <InventoryItem
          key={_id}
          item={item}
          setCharacterForm={setCharacterForm}
          characterForm={characterForm}
          idx={idx}
        />
      </details>
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
      <h2>Inventory Items</h2>
      {allInventoryItems}
      <button onClick={addInventoryItem}>Add an Inventory Item</button>
    </div>
  )
}
