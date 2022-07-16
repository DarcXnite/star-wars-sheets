import { useState } from 'react'

export default function InventoryItems({
  setCharacterForm,
  characterForm: { inventory },
  characterForm,
}) {
  const [newInventory, setNewInventory] = useState({
    itemName: '',
    cost: 0,
    encumbrance: 0,
    description: '',
  })

  const allInventory = inventory.map(eachItem => {
    const { itemName, cost, encumbrance, description } = eachItem

    return (
      <div>
        <label htmlFor='itemName'>Item Name</label>
        <input
          id='itemName'
          type='text'
          name='itemName'
          value={itemName}
          onChange={e =>
            newInventory({ ...characterForm, itemName: e.target.value })
          }
        />
        <label htmlFor='cost'>Cost</label>
        <input
          id='cost'
          type='number'
          name='cost'
          value={cost}
          onChange={e =>
            newInventory({ ...characterForm, cost: e.target.value })
          }
        />
        <label htmlFor='encumbrance'>Encumbrance</label>
        <input
          id='encumbrance'
          type='number'
          name='encumbrance'
          value={encumbrance}
          onChange={e =>
            newInventory({ ...characterForm, encumbrance: e.target.value })
          }
        />
        <label htmlFor='description'>Description</label>
        <input
          id='description'
          type='text'
          name='description'
          value={description}
          onChange={e =>
            newInventory({ ...characterForm, description: e.target.value })
          }
        />
      </div>
    )
  })

  return (
    <div>
      <h2>Inventory Items</h2>
      {allInventory}
    </div>
  )
}
