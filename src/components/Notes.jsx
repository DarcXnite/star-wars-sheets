import { useState } from 'react'

export default function Notes({
  characterForm: { notes },
  characterForm,
  setCharacterForm,
  saveCharacterSheet,
}) {
  const [currentNotes, setCurrentNotes] = useState(notes)

  return (
    <div className='container mx-auto bg-slate-500 p-10 rounded'>
      <div className='flex items-center justify-between text-2xl text-gray-800 font-extrabold mb-3'>
        <h2 className='starjedi'>Notes</h2>
        <div>
          <button className='hover:text-red-700' onClick={saveCharacterSheet}>
            Save
          </button>
        </div>
      </div>
      <textarea
        className='p-3 w-full'
        name='notes'
        id='notes'
        cols='30'
        rows='10'
        onChange={e => {
          setCurrentNotes(e.target.value)
          setCharacterForm({ ...characterForm, notes: e.target.value })
        }}
      >
        {notes}
      </textarea>
    </div>
  )
}
