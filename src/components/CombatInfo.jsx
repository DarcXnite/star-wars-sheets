export default function CombatInfo({
  setWeapon,
  weapon,
  setCharacterForm,
  characterForm: { weapons },
}) {
  const allWeapons = weapons.map(weapon => <div>{weapon.weaponName}</div>)

  return (
    <div>
      <h2>Weapons</h2>
      {allWeapons}
      <label htmlFor='weaponName'>Weapon Name</label>
      <input
        id='weaponName'
        type='text'
        name='weaponName'
        value={weapon.weaponName}
        onChange={e => setWeapon({ weaponName: e.target.value })}
      />
      <label htmlFor='usesSkill'>Uses Skill</label>
      <input
        id='usesSkill'
        type='text'
        name='usesSkill'
        value={weapon.usesSkill}
        onChange={e => setWeapon({ usesSkill: e.target.value })}
      />
      <label htmlFor='damage'>Damage</label>
      <input
        id='damage'
        type='number'
        name='damage'
        value={weapon.damage}
        onChange={e => setWeapon({ damage: e.target.value })}
      />
      <label htmlFor='range'>Range</label>
      <input
        id='damage'
        type='text'
        name='damage'
        value={weapon.damage}
        onChange={e => setWeapon({ damage: e.target.value })}
      />
      <label htmlFor='encumbrance'>Encumbrance</label>
      <input
        id='encumbrance'
        type='number'
        name='encumbrance'
        value={weapon.encumbrance}
        onChange={e => setWeapon({ encumbrance: e.target.value })}
      />
      <label htmlFor='hardPoints'>Hard Points</label>
      <input
        id='hardPoints'
        type='number'
        name='hardPoints'
        value={weapon.hardPoints}
        onChange={e => setWeapon({ hardPoints: e.target.value })}
      />
      <label htmlFor='critRating'>Crit Rating</label>
      <input
        id='critRating'
        type='number'
        name='critRating'
        value={weapon.critRating}
        onChange={e => setWeapon({ critRating: e.target.value })}
      />
      <label htmlFor='condition'>Condition</label>
      <input
        id='condition'
        type='text'
        name='condition'
        value={weapon.condition}
        onChange={e => setWeapon({ condition: e.target.value })}
      />
      <label htmlFor='restricted'>Restricted</label>
      <input
        id='restricted'
        type='boolean'
        name='restricted'
        value={weapon.restricted}
        onChange={e => setWeapon({ restricted: e.target.value })}
      />
      <label htmlFor='qualities'>Qualities</label>
      <input
        id='qualities'
        type='text'
        name='qualities'
        value={weapon.qualities}
        onChange={e => setWeapon({ qualities: e.target.value })}
      />
      <label htmlFor='modifiers'>Modifiers</label>
      <input
        id='modifiers'
        type='text'
        name='modifiers'
        value={weapon.modifiers}
        onChange={e => setWeapon({ modifiers: e.target.value })}
      />
      <label htmlFor='rarity'>Rarity</label>
      <input
        id='rarity'
        type='number'
        name='rarity'
        value={weapon.rarity}
        onChange={e => setWeapon({ rarity: e.target.value })}
      />
    </div>
  )
}
