import React from 'react'

export default function Tool({
  tool: { toolName, encumbrance, summary, rarity },
  tools,
  setCharacterForm,
  characterForm,
  toolIdx,
}) {
  const updateTool = (e, idx) => {
    const updatedTools = characterForm.tools.map((tool, i) => {
      if (idx === i) {
        return { ...tool, [e.target.name]: e.target.value }
      } else {
        return tool
      }
    })
    setCharacterForm({ ...characterForm, tools: updatedTools })
  }

  const deleteTool = () => {
    const updatedTools = tools.filter((tool, i) => i !== toolIdx)
    setCharacterForm({ ...characterForm, tools: updatedTools })
  }

  return (
    <React.Fragment>
      <label htmlFor='toolName'>Tool Name</label>
      <input
        id='toolName'
        type='text'
        name='toolName'
        value={toolName}
        onChange={e => updateTool(e, toolIdx)}
      />
      <label htmlFor='encumbrance'>Encumbrance</label>
      <input
        id='encumbrance'
        type='number'
        name='encumbrance'
        value={encumbrance}
        onChange={e => updateTool(e, toolIdx)}
      />
      <label htmlFor='summary'>Summary</label>
      <input
        id='summary'
        type='text'
        name='summary'
        value={summary}
        onChange={e => updateTool(e, toolIdx)}
      />
      <label htmlFor='rarity'>Rarity</label>
      <input
        id='rarity'
        type='number'
        name='rarity'
        value={rarity}
        onChange={e => updateTool(e, toolIdx)}
      />
      <button onClick={deleteTool}>Delete Tool</button>
    </React.Fragment>
  )
}
