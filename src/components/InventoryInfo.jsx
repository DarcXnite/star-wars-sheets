import React from 'react'
import InventoryItems from './inventory/InventoryItems'
import ArmorInfo from './inventory/ArmorInfo'
import CyberneticsInfo from './inventory/CyberneticsInfo'
import ToolsInfo from './inventory/ToolsInfo'

export default function InventoryInfo({ setCharacterForm, characterForm }) {
  return (
    <div className='container mx-auto bg-slate-500 p-10 rounded'>
      <h2 className='text-2xl text-gray-800 font-extrabold starjedi'>
        inventory
      </h2>
      <details>
        <summary className='text-gray-800 text-xl font-bold'>
          Inventory Items
        </summary>
        <InventoryItems
          characterForm={characterForm}
          setCharacterForm={setCharacterForm}
        />
      </details>
      <details>
        <summary className='text-gray-800 text-xl font-bold'>Armor</summary>
        <ArmorInfo
          characterForm={characterForm}
          setCharacterForm={setCharacterForm}
        />
      </details>
      <details>
        <summary className='text-gray-800 text-xl font-bold'>
          Cybernetics
        </summary>
        <CyberneticsInfo
          characterForm={characterForm}
          setCharacterForm={setCharacterForm}
        />
      </details>
      <details>
        <summary className='text-gray-800 text-xl font-bold'>Tools</summary>
        <ToolsInfo
          characterForm={characterForm}
          setCharacterForm={setCharacterForm}
        />
      </details>
    </div>
  )
}
