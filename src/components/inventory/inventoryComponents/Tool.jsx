import React from 'react'
import Input from '../../ui/Input'

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
      <div className='grid grid-cols-5 px-9 py-3 space-x-1.5 bg-gray-800 m-5 rounded-md h-12'>
        <Input
          className='w-25 h-5'
          id='toolName'
          type='text'
          name='toolName'
          value={toolName}
          onChange={e => updateTool(e, toolIdx)}
        />
        <Input
          className='w-20 h-5'
          id='encumbrance'
          type='number'
          name='encumbrance'
          value={encumbrance}
          onChange={e => updateTool(e, toolIdx)}
          min='0'
        />
        <Input
          className='w-25 h-5'
          id='summary'
          type='text'
          name='summary'
          value={summary}
          onChange={e => updateTool(e, toolIdx)}
        />
        <Input
          className='w-20 h-5'
          id='rarity'
          type='number'
          name='rarity'
          value={rarity}
          onChange={e => updateTool(e, toolIdx)}
          min='0'
        />
        <button onClick={deleteTool}>
          <span className='material-symbols-outlined'>delete</span>
        </button>
      </div>
    </React.Fragment>
  )
}
