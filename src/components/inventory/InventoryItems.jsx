import { useState } from 'react'

export default function InventoryItems({
  setCharacterForm,
  characterForm: { inventory },
}) {
  const [newInventory, setNewInventory] = useState({
    itemName: '',
    cost: 0,
    encumbrance: 0,
    description: '',
  })
  const allInventory = inventory.map(eachItem => {
    const { itemName, cost, encumbrance, description } = eachItem
  })
  return <div>InventoryItems</div>
}
