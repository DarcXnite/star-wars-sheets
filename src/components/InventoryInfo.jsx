import React from 'react'
import InventoryItems from './inventory/InventoryItems'
import ArmorInfo from './inventory/ArmorInfo'
import CyberneticsInfo from './inventory/CyberneticsInfo'
import ToolsInfo from './inventory/ToolsInfo'

export default function InventoryInfo({
  setCharacterForm,
  characterForm,
  saveCharacterSheet,
}) {
  return (
    <div className='container mx-auto bg-slate-500 p-10 rounded'>
      <div className='flex items-center justify-between text-2xl text-gray-800 font-extrabold '>
        <h2 className='starjedi'>inventory</h2>
        <div>
          <button className='hover:text-red-700' onClick={saveCharacterSheet}>
            Save
          </button>
        </div>
      </div>
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
