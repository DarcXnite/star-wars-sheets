import { useState } from 'react'
import Armor from './inventoryComponents/Armor'
import { v4 as uuidv4 } from 'uuid'

export default function ArmorInfo({
  setCharacterForm,
  characterForm: { armors },
  characterForm,
}) {
  const [newArmor, setNewArmor] = useState({
    name: '',
    condition: '',
    value: 0,
    qualities: '',
    features: '',
    rarity: 0,
  })
  const allArmor = armors.map(armor => {
    const { name, condition, value, qualities, features, rarity } = armor

    return (
      <div key={uuidv4()}>
        <label htmlFor='name'>Name</label>
        <input
          id='name'
          type='text'
          name='name'
          value={name}
          onChange={e => newArmor({ ...characterForm, name: e.target.value })}
        />
        <label htmlFor='condition'>Condition</label>
        <input
          id='condition'
          type='text'
          name='condition'
          value={condition}
          onChange={e =>
            newArmor({ ...characterForm, condition: e.target.value })
          }
        />
        <label htmlFor='value'>Value</label>
        <input
          id='value'
          type='number'
          name='value'
          value={value}
          onChange={e => newArmor({ ...characterForm, value: e.target.value })}
        />
        <label htmlFor='qualities'>Qualities</label>
        <input
          id='qualities'
          type='text'
          name='qualities'
          value={qualities}
          onChange={e =>
            newArmor({ ...characterForm, qualities: e.target.value })
          }
        />
        <label htmlFor='features'>Features</label>
        <input
          id='features'
          type='text'
          name='features'
          value={features}
          onChange={e =>
            newArmor({ ...characterForm, features: e.target.value })
          }
        />
        <label htmlFor='rarity'>Rarity</label>
        <input
          id='rarity'
          type='number'
          name='rarity'
          value={rarity}
          onChange={e => newArmor({ ...characterForm, rarity: e.target.value })}
        />
      </div>
    )
  })
  return (
    <div>
      <h2>Armor</h2>
      {allArmor}
    </div>
  )
}
