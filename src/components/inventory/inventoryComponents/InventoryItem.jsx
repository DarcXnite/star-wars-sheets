import React from 'react'

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
      <label htmlFor='itemName'>Item Name</label>
      <input
        id='itemName'
        type='text'
        name='itemName'
        value={itemName}
        onChange={e => updateInventoryItem(e, inventoryIdx)}
      />
      <label htmlFor='cost'>Cost</label>
      <input
        id='cost'
        type='number'
        name='cost'
        value={cost}
        onChange={e => updateInventoryItem(e, inventoryIdx)}
      />
      <label htmlFor='encumbrance'>Encumbrance</label>
      <input
        id='encumbrance'
        type='number'
        name='encumbrance'
        value={encumbrance}
        onChange={e => updateInventoryItem(e, inventoryIdx)}
      />
      <label htmlFor='description'>Description</label>
      <input
        id='description'
        type='text'
        name='description'
        value={description}
        onChange={e => updateInventoryItem(e, inventoryIdx)}
      />
      <button onClick={deleteInventoryItem}>Delete Item</button>
    </React.Fragment>
  )
}
