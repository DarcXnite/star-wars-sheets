import Weapon from './combat/Weapon'
import { v4 as uuidv4 } from 'uuid'

export default function CombatInfo({
  setCharacterForm,
  characterForm: { weapons },
  characterForm,
}) {
  const allWeapons = weapons.map((weapon, idx) => {
    const keyId = uuidv4()
    return (
      <details>
        <summary>Weapon</summary>
        <Weapon
          key={weapon.weaponName}
          weapon={weapon}
          setCharacterForm={setCharacterForm}
          characterForm={characterForm}
          idx={idx}
        />
      </details>
    )
  })

  const initialWeaponForm = {
    weaponName: '',
    usesSkill: '',
    damage: 0,
    range: '',
    encumbrance: 0,
    hardPoints: 0,
    critRating: 0,
    condition: 'New',
    restricted: false,
    qualities: '',
    modifiers: '',
    rarity: 0,
  }

  const addWeapon = () => {
    weapons.push(initialWeaponForm)
    setCharacterForm({ ...characterForm, weapons })
  }

  return (
    <div>
      <h2>Weapons</h2>
      {allWeapons}
      <button onClick={addWeapon}>Add a weapon</button>
    </div>
  )
}
