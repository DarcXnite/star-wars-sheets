import Weapon from './combat/Weapon'
import Talent from './combat/Talent'
import ForcePower from './combat/ForcePower'
import CritInjury from './combat/CritInjury'
import ReactTooltip from 'react-tooltip'
import { useState } from 'react'
// import { v4 as uuidv4 } from 'uuid'

export default function CombatInfo({
  setCharacterForm,
  characterForm: { weapons, talents, criticalInjuries, forcePowers },
  characterForm,
}) {
  const [weaponTip, setWeaponTip] = useState(false)
  const [critTip, setCritTip] = useState(false)
  const [powerTip, setPowerTip] = useState(false)
  const [talentTip, setTalentTip] = useState(false)

  const allWeapons = weapons.map((weapon, idx) => {
    // const keyId = uuidv4()
    const { _id } = weapon
    return (
      <Weapon
        key={_id}
        weapon={weapon}
        setCharacterForm={setCharacterForm}
        characterForm={characterForm}
        weaponIndex={idx}
      />
    )
  })

  const allForcePowers = forcePowers.map((power, idx) => {
    // const keyId = uuidv4()
    const { _id } = power
    return (
      <ForcePower
        key={_id}
        power={power}
        setCharacterForm={setCharacterForm}
        characterForm={characterForm}
        powerIndex={idx}
      />
    )
  })

  const allTalents = talents.map((talent, idx) => {
    // const keyId = uuidv4()
    const { _id } = talent
    return (
      <Talent
        key={_id}
        talent={talent}
        setCharacterForm={setCharacterForm}
        characterForm={characterForm}
        talentIndex={idx}
      />
    )
  })

  const allCritInjuries = criticalInjuries.map((crit, idx) => {
    // const keyId = uuidv4()
    const { _id } = crit
    return (
      <CritInjury
        key={_id}
        crit={crit}
        setCharacterForm={setCharacterForm}
        characterForm={characterForm}
        critIndex={idx}
      />
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
    <div className='container mx-auto bg-slate-500 p-10 rounded'>
      <div>
        <h2 className='text-2xl text-gray-800 font-extrabold starjedi'>
          combat
        </h2>
        <details>
          <summary className='text-gray-800 text-xl font-bold flex items-center'>
            <span className='material-symbols-outlined text-4xl'>
              arrow_drop_down
            </span>
            <span>Weapons</span>
            <a
              href='https://star-wars-rpg-ffg.fandom.com/wiki/Category:Weapon'
              target='_blank'
              rel='noreferrer'
              data-tip='Weapons Guide'
              data-for='weapon'
              onMouseEnter={() => setWeaponTip(true)}
              onMouseLeave={() => setWeaponTip(false)}
              className='material-symbols-outlined ml-2'
            >
              help
            </a>
            <div className={`${!weaponTip ? 'hidden' : ''}`}>
              <ReactTooltip id='weapon' />
            </div>
          </summary>
          {allWeapons}
          <button onClick={addWeapon}>
            <span className='material-symbols-outlined'>add</span>
          </button>
        </details>
        <div></div>
      </div>
      <div>
        <details>
          <summary className='text-gray-800 text-xl font-bold'>
            Critical Injuries
          </summary>
          <div className='text-center text-white text-xl font-extrabold grid grid-cols-3 bg-gray-800 rounded-md'>
            <span>Name</span>
            <span>Roll Range</span>
          </div>
          {allCritInjuries}
          <button onClick={addCritInjury}>
            <span className='material-symbols-outlined'>add</span>
          </button>
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
        </details>
        <div></div>
      </div>
      <div>
        <details>
          <summary className='text-gray-800 text-xl font-bold'>
            Force Powers
          </summary>
          <div className='text-center text-white text-xl font-extrabold grid grid-cols-5 bg-gray-800 rounded-md'>
            <span>Name</span>
            <span>Modifiers</span>
            <span>XP Cost</span>
            <span>Summary</span>
          </div>
          {allForcePowers}
          <button onClick={addForcePower}>
            <span className='material-symbols-outlined'>add</span>
          </button>
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
        </details>
        <div></div>
      </div>
      <details>
        <summary className='text-gray-800 text-xl font-bold'>Talents</summary>
        <div className='text-center text-white text-xl font-extrabold grid grid-cols-6 bg-gray-800 rounded-md'>
          <span>Talent</span>
          <span>Rank</span>
          <span>XP Cost</span>
          <span>Passive</span>
          <span>Rarity</span>
        </div>
        {allTalents}
        <button onClick={addTalent}>
          <span className='material-symbols-outlined'>add</span>
        </button>
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
      </details>
      <div>
        <div></div>
      </div>
    </div>
  )
}
