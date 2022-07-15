import React from 'react'

export default function InventoryInfo({
  setInventory,
  inventory,
  setCharacterForm,
  characterForm,
}) {
  const allInventory = characterForm.inventory.map(item => (
    <div>{item.itemName}</div>
  ))
  return (
    <div>
      <h2>Inventory</h2>
      {allInventory}
      <label htmlFor='itemName'>Item Name</label>
      <input
        id='itemName'
        type='text'
        name='itemName'
        value={inventory.itemName}
        onChange={e => setInventory({ itemName: e.target.value })}
      />
      <label htmlFor='cost'>Cost</label>
      <input
        id='cost'
        type='number'
        name='cost'
        value={inventory.cost}
        onChange={e => setInventory({ cost: e.target.value })}
      />
      <label htmlFor='encumbrance'>Encumbrance</label>
      <input
        id='encumbrance'
        type='number'
        name='encumbrance'
        value={inventory.encumbrance}
        onChange={e => setInventory({ encumbrance: e.target.value })}
      />
      <label htmlFor='description'>Description</label>
      <input
        id='description'
        type='text'
        name='description'
        value={inventory.description}
        onChange={e => setInventory({ description: e.target.value })}
      />
    </div>
  )
}
