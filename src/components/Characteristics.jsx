import Input from './ui/Input'

export default function Characteristics({
  setCharacterForm,
  characterForm: { brawn, agility, intellect, cunning, willpower, presence },
  characterForm,
}) {
  return (
    <div>
      <div className='flex flex-wrap px-5 py-3 space-x-2'>
        <div>
          <Input
            label='Brawn:'
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
          <Input
            label='Agility:'
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
          <Input
            label='Intellect:'
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
          <Input
            label='Cunning:'
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
          <Input
            label='Willpower:'
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
          <Input
            label='Presence:'
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
