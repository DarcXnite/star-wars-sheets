import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import Tool from './inventoryComponents/Tool'

export default function ToolsInfo({
  setCharacterForm,
  characterForm: { tools },
  characterForm,
}) {
  const allTools = tools.map((tool, idx) => {
    const { _id } = tool
    return (
      <Tool
        key={_id}
        tool={tool}
        tools={tools}
        setCharacterForm={setCharacterForm}
        characterForm={characterForm}
        toolIdx={idx}
      />
    )
  })

  const initialToolForm = {
    toolName: '',
    encumbrance: 0,
    summary: '',
    rarity: 0,
  }

  const addTool = () => {
    tools.push(initialToolForm)
    setCharacterForm({ ...characterForm, tools })
  }

  return (
    <div>
      <div className='text-center text-white text-xl font-extrabold grid grid-cols-4 bg-gray-800 rounded-md'>
        <span>Name</span>
        <span>Encum</span>
        <span>Summary</span>
        <span>Rarity</span>
      </div>
      {allTools}
      <button className='flex' onClick={addTool}>
        <span className='material-symbols-outlined text-gray-800 hover:text-red-800'>
          add
        </span>
        <span className='text-gray-800 hover:text-red-800'>Add</span>
      </button>{' '}
    </div>
  )
}
