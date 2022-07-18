import Weapon from './combat/Weapon'
import Talent from './combat/Talent'
import ForcePower from './combat/ForcePower'
import CritInjury from './combat/CritInjury'
import { v4 as uuidv4 } from 'uuid'

export default function CombatInfo({
  setCharacterForm,
  characterForm: { weapons, talents, criticalInjuries, forcePowers },
  characterForm,
}) {
  const allWeapons = weapons.map((weapon, idx) => {
    // const keyId = uuidv4()
    const { _id } = weapon
    return (
      <details open={true}>
        <summary>Weapon</summary>
        <Weapon
          key={_id}
          weapon={weapon}
          setCharacterForm={setCharacterForm}
          characterForm={characterForm}
          weaponIndex={idx}
        />
      </details>
    )
  })

  const allForcePowers = forcePowers.map((power, idx) => {
    // const keyId = uuidv4()
    const { _id } = power
    return (
      <details open={true}>
        <summary>Force Power</summary>
        <ForcePower
          key={_id}
          power={power}
          setCharacterForm={setCharacterForm}
          characterForm={characterForm}
          powerIndex={idx}
        />
      </details>
    )
  })

  const allTalents = talents.map((talent, idx) => {
    // const keyId = uuidv4()
    const { _id } = talent
    return (
      <details open={true}>
        <summary>Talent</summary>
        <Talent
          key={_id}
          talent={talent}
          setCharacterForm={setCharacterForm}
          characterForm={characterForm}
          talentIndex={idx}
        />
      </details>
    )
  })

  const allCritInjuries = criticalInjuries.map((crit, idx) => {
    // const keyId = uuidv4()
    const { _id } = crit
    return (
      <details open={true}>
        <summary>Critical Injury</summary>
        <CritInjury
          key={_id}
          crit={crit}
          setCharacterForm={setCharacterForm}
          characterForm={characterForm}
          critIndex={idx}
        />
      </details>
    )
  })

  const initialForcePowerForm = {
    powerName: '',
    modifiers: '',
    xpCost: 0,
    summary: '',
    upgrades: [],
  }

  const initialCritInjury = {
    criticalName: '',
    rollRange: '',
  }

  const initialTalentForm = {
    talentName: '',
    rank: 0,
    xpCost: 0,
    passive: false,
    summary: '',
  }

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
    attachments: [],
  }

  const addWeapon = () => {
    weapons.push(initialWeaponForm)
    setCharacterForm({ ...characterForm, weapons })
  }

  const addTalent = () => {
    talents.push(initialTalentForm)
    setCharacterForm({ ...characterForm, talents })
  }

  const addCritInjury = () => {
    criticalInjuries.push(initialCritInjury)
    setCharacterForm({ ...characterForm, criticalInjuries })
  }

  const addForcePower = () => {
    forcePowers.push(initialForcePowerForm)
    setCharacterForm({ ...characterForm, forcePowers })
  }

  return (
    <div>
      <div>
        <div>
          <h2>Weapons</h2>
          <span>
            ({' '}
            <a
              href='https://star-wars-rpg-ffg.fandom.com/wiki/Category:Weapon'
              target='_blank'
            >
              Weapons Guide
            </a>{' '}
            )
          </span>
        </div>
        {allWeapons}
        <button onClick={addWeapon}>Add a weapon</button>
      </div>
      <div>
        <div>
          <h2>Critical Injuries</h2>
          <span>
            ({' '}
            <a
              href='https://sw-eote-srd.vercel.app/personal/status-recovery/critical-injuries/'
              target='_blank'
            >
              Critical Injuries Guide
            </a>{' '}
            )
          </span>
        </div>
        {allCritInjuries}
        <button onClick={addCritInjury}>Add Critical Injury</button>
      </div>
      <div>
        <div>
          <h2>Force Powers </h2>
          <span>
            ({' '}
            <a
              href='https://star-wars-rpg-ffg.fandom.com/wiki/Category:Force_Power'
              target='_blank'
            >
              Force Powers Guide
            </a>{' '}
            )
          </span>
        </div>
        {allForcePowers}
        <button onClick={addForcePower}>Add Force Power</button>
      </div>
      <div>
        <div>
          <h2>Talents</h2>
          <span>
            ({' '}
            <a
              href='https://star-wars-rpg-saga-edition.fandom.com/wiki/Talents'
              target='_blank'
            >
              Talents Guide
            </a>{' '}
            )
          </span>
        </div>
        {allTalents}
        <button onClick={addTalent}>Add Talent</button>
      </div>
    </div>
  )
}
