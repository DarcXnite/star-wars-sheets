import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export default function ToolsInfo({
  setCharacterForm,
  characterForm: { tools },
  characterForm,
}) {
  const [newTool, setNewTool] = useState({
    toolName: '',
    encumbrance: 0,
    summary: '',
    rarity: 0,
  })
  const allTools = tools.map(eachTool => {
    const { toolName, encumbrance, summary, rarity } = eachTool

    return (
      <div key={uuidv4()}>
        <label htmlFor='toolName'>Tool Name</label>
        <input
          id='toolName'
          type='text'
          name='toolName'
          value={toolName}
          onChange={e =>
            newTool({ ...characterForm, toolName: e.target.value })
          }
        />
        <label htmlFor='encumbrance'>Encumbrance</label>
        <input
          id='encumbrance'
          type='number'
          name='encumbrance'
          value={encumbrance}
          onChange={e =>
            newTool({ ...characterForm, encumbrance: e.target.value })
          }
        />
        <label htmlFor='summary'>Summary</label>
        <input
          id='summary'
          type='text'
          name='summary'
          value={summary}
          onChange={e => newTool({ ...characterForm, summary: e.target.value })}
        />
        <label htmlFor='rarity'>Rarity</label>
        <input
          id='rarity'
          type='number'
          name='rarity'
          value={rarity}
          onChange={e => newTool({ ...characterForm, rarity: e.target.value })}
        />
      </div>
    )
  })
  return (
    <div>
      <h2>Tools</h2>
      {allTools}
    </div>
  )
}
