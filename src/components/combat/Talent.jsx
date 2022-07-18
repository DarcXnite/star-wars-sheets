import React from 'react'
import Input from '../ui/Input'

export default function Talent({
  talent: { talentName, rank, xpCost, passive, summary },
  characterForm,
  setCharacterForm,
  talentIndex,
}) {
  const updateTalent = (e, idx) => {
    const updatedTalents = characterForm.talents.map((talent, i) => {
      if (idx === i) {
        return { ...talent, [e.target.name]: e.target.value }
      } else {
        return talent
      }
    })
    setCharacterForm({ ...characterForm, talents: updatedTalents })
  }

  const passiveCheck = (e, idx) => {
    const updatedTalents = characterForm.talents.map((talent, i) => {
      if (idx === i) {
        return { ...talent, [e.target.name]: !passive }
      } else {
        return talent
      }
    })
    setCharacterForm({ ...characterForm, talents: updatedTalents })
  }

  const removeTalent = () => {
    const updatedTalents = characterForm.talents.filter(
      (tal, i) => i !== talentIndex
    )
    setCharacterForm({ ...characterForm, talents: updatedTalents })
  }

  return (
    <React.Fragment>
      <Input
        label='Talent:'
        type='text'
        value={talentName}
        name='talentName'
        onChange={e => updateTalent(e, talentIndex)}
      />

      <Input
        label='Rank:'
        type='number'
        value={rank}
        name='rank'
        onChange={e => updateTalent(e, talentIndex)}
        min='0'
      />

      <Input
        label='XP Cost:'
        type='number'
        value={xpCost}
        name='xpCost'
        onChange={e => updateTalent(e, talentIndex)}
        min='0'
      />

      <Input
        label='Passive?'
        type='checkbox'
        name='passive'
        checked={passive}
        onChange={e => passiveCheck(e, talentIndex)}
      />

      <Input
        label='Summary:'
        type='text'
        value={summary}
        name='summary'
        onChange={e => updateTalent(e, talentIndex)}
      />
      <button onClick={removeTalent}>
        <span className='material-symbols-outlined'>delete</span>
      </button>
    </React.Fragment>
  )
}
