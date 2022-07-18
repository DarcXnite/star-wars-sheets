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
      <details>
        <summary>Tools</summary>
        <Tool
          key={_id}
          tool={tool}
          tools={tools}
          setCharacterForm={setCharacterForm}
          characterForm={characterForm}
          toolIdx={idx}
        />
      </details>
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
      <h2>Tools</h2>
      {allTools}
      <button onClick={addTool}>
        <span className='material-symbols-outlined'>add</span>
      </button>
    </div>
  )
}
