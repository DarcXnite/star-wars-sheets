export default function Characteristics({
  setCharacterForm,
  characterForm: { brawn, agility, intellect, cunning, willpower, presence },
  characterForm,
}) {
  return (
    <div>
      <div className='container'>
        <div>
          <label htmlFor='brawn'>Brawn</label>
          <input
            id='brawn'
            type='number'
            value={brawn}
            onChange={e =>
              setCharacterForm({
                ...characterForm,
                brawn: parseInt(e.target.value),
              })
            }
            min='1'
            max='6'
          />
        </div>
        <div>
          <label htmlFor='agility'>Agility</label>
          <input
            id='agility'
            type='number'
            value={agility}
            onChange={e =>
              setCharacterForm({
                ...characterForm,
                agility: parseInt(e.target.value),
              })
            }
            min='1'
            max='6'
          />
        </div>
        <div>
          <label htmlFor='intellect'>Intellect</label>
          <input
            id='intellect'
            type='number'
            value={intellect}
            onChange={e =>
              setCharacterForm({
                ...characterForm,
                intellect: parseInt(e.target.value),
              })
            }
            min='1'
            max='6'
          />
        </div>
        <div>
          <label htmlFor='cunning'>Cunning</label>
          <input
            id='cunning'
            type='number'
            value={cunning}
            onChange={e =>
              setCharacterForm({
                ...characterForm,
                cunning: parseInt(e.target.value),
              })
            }
            min='1'
            max='6'
          />
        </div>
        <div>
          <label htmlFor='willpower'>Willpower</label>
          <input
            id='willpower'
            type='number'
            value={willpower}
            onChange={e =>
              setCharacterForm({
                ...characterForm,
                willpower: parseInt(e.target.value),
              })
            }
            min='1'
            max='6'
          />
        </div>
        <div>
          <label htmlFor='presence'>Presence</label>
          <input
            id='presence'
            type='number'
            value={presence}
            onChange={e =>
              setCharacterForm({
                ...characterForm,
                presence: parseInt(e.target.value),
              })
            }
            min='1'
            max='6'
          />
        </div>
      </div>
    </div>
  )
}
