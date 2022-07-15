import { useState } from 'react'

export default function Notes({
  characterForm: { notes },
  characterForm,
  setCharacterForm,
}) {
  const [currentNotes, setCurrentNotes] = useState(notes)

  return (
    <div>
      <h2>Notes</h2>
      <textarea
        name='notes'
        id='notes'
        cols='30'
        rows='10'
        onChange={e => {
          setCurrentNotes(e.target.value)
          setCharacterForm({ ...characterForm, notes: currentNotes })
        }}
      >
        {currentNotes}
      </textarea>
    </div>
  )
}
