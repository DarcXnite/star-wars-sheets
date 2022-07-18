import React from 'react'
import InventoryItems from './inventory/InventoryItems'
import ArmorInfo from './inventory/ArmorInfo'
import CyberneticsInfo from './inventory/CyberneticsInfo'
import ToolsInfo from './inventory/ToolsInfo'

export default function InventoryInfo({ setCharacterForm, characterForm }) {
  return (
    <div className='container mx-auto bg-slate-500 p-10 rounded'>
      <h2>Inventory</h2>
      <InventoryItems
        characterForm={characterForm}
        setCharacterForm={setCharacterForm}
      />
      <ArmorInfo
        characterForm={characterForm}
        setCharacterForm={setCharacterForm}
      />
      <CyberneticsInfo
        characterForm={characterForm}
        setCharacterForm={setCharacterForm}
      />
      <ToolsInfo
        characterForm={characterForm}
        setCharacterForm={setCharacterForm}
      />
    </div>
  )
}
