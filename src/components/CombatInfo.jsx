import { useState } from 'react'

export default function CombatInfo({ submitHandler }) {
  const [characterInfoForm, setCharacterInfoForm] = useState
  return (
    <div>
      <form
        onSubmit={e =>
          submitHandler(e, characterInfoForm, setCharacterInfoForm)
        }
      ></form>
    </div>
  )
}
