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
      <Input
        label='Item Name:'
        id='itemName'
        type='text'
        name='itemName'
        value={itemName}
        onChange={e => updateInventoryItem(e, inventoryIdx)}
      />
      <Input
        label='Cost:'
        id='cost'
        type='number'
        name='cost'
        value={cost}
        onChange={e => updateInventoryItem(e, inventoryIdx)}
        min='0'
      />
      <Input
        label='Encumbrance:'
        id='encumbrance'
        type='number'
        name='encumbrance'
        value={encumbrance}
        onChange={e => updateInventoryItem(e, inventoryIdx)}
        min='0'
      />
      <Input
        label='Description:'
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
