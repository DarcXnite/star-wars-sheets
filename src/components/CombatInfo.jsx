import Weapon from './combat/Weapon'
import Talent from './combat/Talent'
import ForcePower from './combat/ForcePower'
import CritInjury from './combat/CritInjury'
import { useState } from 'react'
import Summary from './Summary'
// import { v4 as uuidv4 } from 'uuid'

export default function CombatInfo({
  setCharacterForm,
  characterForm: { weapons, talents, criticalInjuries, forcePowers },
  characterForm,
  saveCharacterSheet,
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
        <div className='flex items-center justify-between text-2xl text-gray-800 font-extrabold '>
          <h2 className='starjedi'>combat</h2>
          <div>
            <button className='hover:text-red-700' onClick={saveCharacterSheet}>
              Save
            </button>
          </div>
        </div>

        <details>
          <Summary
            link='https://star-wars-rpg-ffg.fandom.com/wiki/Category:Weapon'
            toolTip='Weapons Guide'
            id='weapon'
            toolTipFunc={setWeaponTip}
            toolTipBool={weaponTip}
            name='Weapons'
          />
          {allWeapons}
          <button className='flex' onClick={addWeapon}>
            <span className='material-symbols-outlined text-gray-800 hover:text-red-800'>
              add
            </span>
            <span className='text-gray-800 hover:text-red-800'>Add</span>
          </button>{' '}
        </details>
      </div>
      <div>
        <details>
          <Summary
            link='https://sw-eote-srd.vercel.app/personal/status-recovery/critical-injuries/'
            toolTip='Critical Injuries Guide'
            id='crit'
            toolTipFunc={setCritTip}
            toolTipBool={critTip}
            name='Critical Injuries'
          />
          <div className='text-center text-white text-xl font-extrabold grid grid-cols-2 bg-gray-800 rounded-md'>
            <span>Name</span>
            <span>Roll Range</span>
          </div>
          {allCritInjuries}
          <button className='flex' onClick={addCritInjury}>
            <span className='material-symbols-outlined text-gray-800 hover:text-red-800'>
              add
            </span>
            <span className='text-gray-800 hover:text-red-800'>Add</span>
          </button>{' '}
        </details>
        <div></div>
      </div>
      <div>
        <details>
          <Summary
            link='https://star-wars-rpg-ffg.fandom.com/wiki/Category:Force_Power'
            toolTip='Force Powers Guide'
            id='power'
            toolTipFunc={setPowerTip}
            toolTipBool={powerTip}
            name='Force Powers'
          />
          <div className='text-center text-white sm:text-xl text-sm font-extrabold grid grid-cols-4 bg-gray-800 rounded-md'>
            <span>Name</span>
            <span>Modifiers</span>
            <span>XP Cost</span>
            <span>Summary</span>
          </div>
          {allForcePowers}
          <button className='flex' onClick={addForcePower}>
            <span className='material-symbols-outlined text-gray-800 hover:text-red-800'>
              add
            </span>
            <span className='text-gray-800 hover:text-red-800'>Add</span>
          </button>{' '}
        </details>
        <div></div>
      </div>
      <details>
        <Summary
          link='https://star-wars-rpg-saga-edition.fandom.com/wiki/Talents'
          toolTip='Talents Guide'
          id='talents'
          toolTipFunc={setTalentTip}
          toolTipBool={talentTip}
          name='Talents'
        />
        <div className='text-center text-white text-xl font-extrabold grid grid-cols-5 bg-gray-800 rounded-md sm:visible invisible'>
          <span>Talent</span>
          <span>Rank</span>
          <span>XP Cost</span>
          <span>Passive</span>
          <span>Rarity</span>
        </div>
        {allTalents}
        <button className='flex' onClick={addTalent}>
          <span className='material-symbols-outlined text-gray-800 hover:text-red-800'>
            add
          </span>
          <span className='text-gray-800 hover:text-red-800'>Add</span>
        </button>{' '}
      </details>
      <div>
        <div></div>
      </div>
    </div>
  )
}
